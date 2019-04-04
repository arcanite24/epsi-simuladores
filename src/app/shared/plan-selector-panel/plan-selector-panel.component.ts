import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgbDate, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment'
import { ToastrService } from 'ngx-toastr';
import { Content, Collections } from 'src/app/app.models';
import { sortBy } from 'lodash'
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
let twix = require('twix');

@Component({
  selector: 'epsi-plan-selector-panel',
  templateUrl: './plan-selector-panel.component.html',
  styleUrls: ['./plan-selector-panel.component.scss']
})
export class PlanSelectorPanelComponent implements OnInit {

  public step: string = 'mode_selector'
  public mode: string
  public finishDate: NgbDate

  public loading: boolean = false
  public loadingText: string = 'Iniciando Calendario Inteligente Zamná...'

  public maxDate: NgbDate = new NgbDate(2018, 8, 30)
  public minDate: NgbDate = new NgbDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDay())

  public content: Content[]
  public dias: number
  public range: any

  constructor(
    private data: DataService,
    private toastr: ToastrService,
    private loadingBar: LoadingBarService,
    private afs: AngularFirestore,
    private auth: AuthService,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  setMode(mode: string) {
    this.mode = mode
    if (mode == 'ignore') return this.modal.getModal('ignoreModal').open()
    if (mode == 'date_order') this.modal.getModal('dateSelector').open()
    if (mode == 'only_date') this.setCalendarToUser(this.content, this.dias, this.range)
  }

  async generateCalendar(date: NgbDate) {
  
    this.modal.getModal('dateSelector').close()
    this.loading = true
    
    const finish = new Date(date.year, date.month - 1, date.day).toISOString()
    const range = (moment() as any).twix(finish)
    console.log(finish)

    if (!range.isValid()) return this.toastr.error('Selecciona una fecha válida')
    if (range.isPast()) return this.toastr.error('Selecciona una fecha válida')
    const dias = range.count('days')
    console.log('repartiendo contenido en', dias, 'dias')

    this.loadingBar.start()
    this.loadingText = 'Cargando contenido...'
    this.modal.getModal('contentFilterModal').open()

    this.content = await this.getFormattedContent()
    
    if (this.mode == 'only_date') {
      this.setCalendarToUser(this.content, dias, range)
    } else if (this.mode == 'date_order') {
      this.loadingText = 'Seleccionando contenido'
      this.loadingBar.complete()
      this.range = range
      this.dias = dias
    }

  }

  async contentFilterCallback(content: Content[], dias: number, range: any) {

    const _content = content.filter(c => c.selected)
    console.log(dias, _content)

    await this.setCalendarToUser(_content, dias, range)

  }

  async setCalendarToUser(content: Content[], dias: number, range: any) {

    content = content.filter(c => c.type == 'tema')
    let calendar = []

    const perDay = Math.ceil(content.length / dias)
    console.log(`repartiendo ${content.length} temas en ${dias} dias, ${perDay} temas por día`)
    this.loadingText = `Repartiendo ${content.length} temas en ${dias} dias, ${perDay} temas por día.`

    const iter = range.iterate('days')
    while (iter.hasNext()) {
      
      const dia = iter.next()
      const newTemas = content.splice(0, perDay)
      this.loadingText = `Temas para el ${dia.format('YYYY/MM/DD')}`

      calendar = [...calendar, newTemas.map(t => ({
        start: dia.toISOString(),
        fullDay: true,
        event: null,
        content: t.id,
        content_name: t.name,
      }))]

    }

    let customCalendar = {}
    this.loadingText = 'Guardando calendario personalizado'

    for (const [i, calendarDay] of Object.entries(calendar)) {
      customCalendar[i] = calendarDay
    }

    console.log(customCalendar)

    await this.afs.collection(Collections.USER).doc(this.auth.user.uid).update({customCalendar: null})
    await this.afs.collection(Collections.USER).doc(this.auth.user.uid).update({customCalendar})

    this.loadingText = 'Calendario completado'
    this.loadingBar.complete()

  }

  async getFormattedContent(): Promise<Content[]> {

    let content = []

    const materias = await this.data.getCollectionQuery<Content>(Collections.CONTENT, ref => ref.where('type', '==', 'materia'))

    for (const materia of materias) {

      console.log('materia:', materia.name)
      this.loadingText = materia.name

      const bloques = await this.data.getCollectionQuery<Content>(Collections.CONTENT, ref => ref
        .where('type', '==', 'bloque')
        .where('parent_id', '==', materia.id))

      const _bloques = sortBy(bloques, 'sortIndex')

      for (const bloque of _bloques) {

        this.loadingText = bloque.name

        content = [...content, bloque]
        
        const temas = await this.data.getCollectionQuery<Content>(Collections.CONTENT, ref => ref
          .where('type', '==', 'tema')
          .where('parent_id', '==', bloque.id))

        content = [...content, ...sortBy(temas, 'sortIndex').map(t => ({...t, parent_name: bloque.name}))]

      }

    }

    return content.map(c => ({...c, selected: true}))

  }

  radioChange(c: Content) {
    if (c.type == 'bloque') {
      c.selected ? this.content = this.content.map(cc => {
        return cc.parent_id == c.id ? ({...cc, selected: true}) : cc
      }) : this.content = this.content.map(cc => {
        return cc.parent_id == c.id ? ({...cc, selected: false}) : cc
      })
    }
  }

}
