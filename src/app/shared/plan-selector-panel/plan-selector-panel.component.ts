import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment'
import { ToastrService } from 'ngx-toastr';
import { Content, Collections } from 'src/app/app.models';
import { sortBy } from 'lodash'
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(
    private data: DataService,
    private toastr: ToastrService,
    private loadingBar: LoadingBarService,
    private afs: AngularFirestore,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  async generateCalendar(date: NgbDate) {
  
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

    let content = await this.getFormattedContent()
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

    await this.afs.collection(Collections.USER).doc(this.auth.user.uid).update({
      customCalendar
    })

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

      for (const bloque of bloques) {

        this.loadingText = bloque.name
        
        const temas = await this.data.getCollectionQuery<Content>(Collections.CONTENT, ref => ref
          .where('type', '==', 'tema')
          .where('parent_id', '==', bloque.id))

        content = [...content, ...sortBy(temas, 'sortIndex')]

      }

    }

    return content

  }

}
