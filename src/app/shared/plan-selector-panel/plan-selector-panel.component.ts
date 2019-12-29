import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgbDate, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Content, Collections } from 'src/app/app.models';
import { sortBy, findIndex, flattenDeep } from 'lodash';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { PaymentService } from 'src/app/services/payment.service';
const twix = require('twix');

@Component({
  selector: 'epsi-plan-selector-panel',
  templateUrl: './plan-selector-panel.component.html',
  styleUrls: ['./plan-selector-panel.component.scss']
})
export class PlanSelectorPanelComponent implements OnInit {

  public step = 'mode_selector';
  public mode: string;
  public finishDate: NgbDate;

  public loading = false;
  public loadingText = 'Iniciando Calendario Inteligente Zamná...';

  public maxDate: NgbDate = new NgbDate(2018, 8, 30);
  public minDate: NgbDate = new NgbDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDay());

  public content: Content[];
  public dias: number;
  public range: any;

  constructor(
    private data: DataService,
    private toastr: ToastrService,
    private loadingBar: LoadingBarService,
    private afs: AngularFirestore,
    private auth: AuthService,
    private modal: NgxSmartModalService,
    private pay: PaymentService,
  ) { }

  ngOnInit() {
  }

  setMode(mode: string) {

    if (!this.pay.isComplete()) {
      this.pay.redirectToPayment();
    }

    this.mode = mode;
    if (mode === 'ignore') { return this.setIgnoreMode(); }
    if (mode === 'date_order') { this.modal.getModal('dateSelector').open(); }
    if (mode === 'only_date') { this.modal.getModal('dateSelector').open(); }
  }

  async setIgnoreMode() {
    await this.afs.collection(Collections.USER).doc(this.auth.user.uid).update({noCalendar: true});
  }

  async generateCalendar(date: NgbDate) {

    this.modal.getModal('dateSelector').close();
    this.loading = true;

    const finish = new Date(date.year, date.month - 1, date.day).toISOString();
    const range = (moment() as any).twix(finish);
    console.log(finish);

    if (!range.isValid()) { return this.toastr.error('Selecciona una fecha válida'); }
    if (range.isPast()) { return this.toastr.error('Selecciona una fecha válida'); }
    const dias = range.count('days');
    console.log('repartiendo contenido en', dias, 'dias');

    this.loadingBar.start();
    this.loadingText = 'Cargando contenido...';
    this.modal.getModal('contentFilterModal').open();

    this.content = await this.getFormattedContent();

    if (this.mode === 'only_date') {
      this.setCalendarToUser(this.content, dias, range);
    } else if (this.mode === 'date_order') {
      this.loadingText = 'Seleccionando contenido';
      this.loadingBar.complete();
      this.range = range;
      this.dias = dias;
    }

  }

  async contentFilterCallback(content: Content[], dias: number, range: any) {

    const _content = content.filter(c => c.selected);
    console.log(dias, _content);

    await this.setCalendarToUser(_content, dias, range);

  }

  async setCalendarToUser(content: Content[], dias: number, range: any) {

    content = flattenDeep(content.map(c => c.temas)) as Content[];

    content = content
      .filter(c => c.type === 'tema')
      .filter(c => !c.ignoreOnSmartCalendar)
      .filter(c => c.video);
    let calendar = [];

    const cociente = content.length / dias;
    let perDay = cociente - Math.floor(cociente) > 0.5 ? Math.ceil(cociente) : Math.floor(cociente);
    perDay = perDay < 1 ? 1 : perDay;
    console.log(`repartiendo ${content.length} temas en ${dias} dias, ${perDay} temas por día`);
    this.loadingText = `Repartiendo ${content.length} temas en ${dias} dias, ${perDay} temas por día.`;

    const iter = range.iterate('days');
    while (iter.hasNext()) {

      const dia = iter.next();
      const newTemas = content.splice(0, perDay);
      this.loadingText = `Temas para el ${dia.format('YYYY/MM/DD')}`;

      calendar = [...calendar, newTemas.map(t => ({
        start: dia.toISOString(),
        fullDay: true,
        event: t.event || null,
        content: t.id || null,
        content_name: t.name || null,
      }))];

    }

    const customCalendar = {};
    this.loadingText = 'Guardando calendario personalizado';

    for (const [i, calendarDay] of Object.entries(calendar)) {
      customCalendar[i] = calendarDay;
    }

    console.log(customCalendar, this.auth.user.uid);
    const uid = this.auth.user.uid;

    await this.afs.collection(Collections.USER).doc(uid).update({customCalendar: null});
    await this.afs.collection(Collections.USER).doc(uid).update({customCalendar});

    this.loadingText = 'Calendario completado';
    this.loadingBar.complete();

    // TODO: Temp fix for the calendar event loading bug
    location.reload();

  }

  async getFormattedContent(): Promise<Content[]> {

    // const cache = localStorage.getItem('zamna-content-cache');
    // if (cache && this.auth.isAdmin) { return JSON.parse(cache); }

    let content = [];

    const _materias = await this.data.getCollectionQuery<Content>(Collections.CONTENT, ref => ref.where('type', '==', 'materia'));
    let materias = [];

    if (!this.auth.isPremium2020) {
      if (this.auth.isLight2020) {
        materias = _materias.filter(m => m.name.includes('Temprano')); 
      }
      materias = _materias.filter(c => {
        for (const role of c.roles) {
          if (this.auth.user[role]) { return true; }
        }
      });
    } else {
      materias = _materias;
    }

    for (const materia of materias) {

      console.log('materia:', materia.name);
      this.loadingText = materia.name;

      const bloques = await this.data.getCollectionQuery<Content>(Collections.CONTENT, ref => ref
        .where('type', '==', 'bloque')
        .where('parent_id', '==', materia.id));

      const _bloques = sortBy(bloques, 'sortIndex');

      for (const bloque of _bloques) {

        this.loadingText = bloque.name;

        /*content = [...content, bloque]*/

        const temas = await this.data.getCollectionQuery<Content>(Collections.CONTENT, ref => ref
          .where('type', '==', 'tema')
          .where('parent_id', '==', bloque.id));

        bloque.temas = sortBy(temas, 'sortIndex').map(t => ({...t, parent_name: bloque.name, selected: true}));

        content = [...content, bloque];

      }

    }

    const final = content.map(c => ({...c, selected: true}));
    localStorage.setItem('zamna-content-cache', JSON.stringify(final));
    return final;

  }

  radioChange(c: Content) {
    if (c.type == 'bloque') {
      c.temas = c.temas.map(t => ({...t, selected: c.selected}));
      /*c.selected ? this.content = this.content.map(cc => {
        return cc.parent_id == c.id ? ({...cc, selected: true}) : cc
      }) : this.content = this.content.map(cc => {
        return cc.parent_id == c.id ? ({...cc, selected: false}) : cc
      })*/
    }
  }

  orderBloque(content: Content[] = [], current: Content, i: number, delta: number) {

    this.content = this.move(content, i, i + delta);

    /*const trimmed = content.slice(i + 1)
    const lastChildRelative = findIndex(trimmed, c => c.type == 'bloque') - 1
    const lastChild = findIndex(content, c => c.id == trimmed[lastChildRelative].id)
    const target = lastChild + 1
    const stepsToMove = target - i

    console.log(
      i,
      lastChild,
      /!*trimmed.map(c => ({name: c.name, type: c.type})),*!/
      content.map(c => ({name: c.name, type: c.type}))
    )

    console.log('target', target, 'stepsToMove', stepsToMove)

    let movedArr = content

    for (let ii = i; ii <= lastChild; ii++) {
      movedArr = this.move(movedArr, ii, ii + stepsToMove)
    }

    this.content = movedArr*/

  }

  private move(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      let k = new_index - arr.length;
      while ((k--) + 1) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  }

}
