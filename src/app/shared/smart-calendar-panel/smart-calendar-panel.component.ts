import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event, Collections, User } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';
import moment from 'moment'
import { AuthService } from 'src/app/services/auth.service';
import { CalendarView } from 'angular-calendar';
import { flattenDeep } from 'lodash'

@Component({
  selector: 'epsi-smart-calendar-panel',
  templateUrl: './smart-calendar-panel.component.html',
  styleUrls: ['./smart-calendar-panel.component.scss']
})
export class SmartCalendarPanelComponent implements OnInit {

  public viewDate: Date = new Date()
  public view: CalendarView = CalendarView.Month

  public dayEvents: Event[]
  public completedTasks: string[] = []

  public events$: Observable<Event[]>

  constructor(
    private afs: AngularFirestore,
    private modal: NgxSmartModalService,
    public auth: AuthService
  ) { }

  get mesLabel(): string { return moment(this.viewDate).format('MMMM - YYYY') }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.afs.collection(Collections.USER).doc<User>(user.uid).valueChanges().subscribe(u => this.completedTasks = u.completedTasks ? u.completedTasks : [])
        if (!this.events$) this.loadEvents(user.uid)
      }
    })
  }

  dayClicked(day: any) {
    this.dayEvents = day.events as Event[]
    if (day.events && day.events.length > 0) this.modal.getModal('eventsModal').open()
  }

  loadEvents(uid: string) {
    this.events$ = this.afs.collection(Collections.USER).doc<User>(uid)
      .valueChanges()
      .pipe(
        map(user => {
          if (!user.customCalendar) return []
          const events = flattenDeep(Object.values(user.customCalendar))
          if (!user.completedTasks) user.completedTasks = []
          return events.map((e: any) => ({
            id: 'TESSSST',
            ...e,
            start: new Date(e.start),
            title: e.content_name,
            desc: 'TEST',
            date: new Date().toISOString(),
            tasks: [],
            links: [],
            color: user.completedTasks.indexOf('TESSSST') >= 0 ? {primary: '#5e4b8b', secondary: '#5e4b8b'} : {primary: '#CF4747', secondary: '#CF4747'}
          })) as Event[]
        })
      )
  }

  removeCalendar() {
    this.afs.collection(Collections.USER).doc(this.auth.user.uid).update({ customCalendar: null })
  }

}
