import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event, Collections, User } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';
import moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { CalendarView } from 'angular-calendar';
import { flattenDeep } from 'lodash';

@Component({
  selector: 'epsi-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.scss']
})
export class CalendarPanelComponent implements OnInit {

  public viewDate: Date = new Date();
  public view: CalendarView = CalendarView.Month;

  public dayEvents: Event[];
  public completedTasks: string[] = [];

  /* public events$: Observable<Event[]> */

  public events$: Observable<Event[]> = this.afs.collection<Event>(Collections.EVENT)
    .valueChanges()
    .pipe(
      map(events => {
        return events.map(e => ({
          ...e,
          start: moment(e.date).startOf('day').toDate(),
          fullDay: true,
          color: this.completedTasks.indexOf(e.id) >= 0 ?
            {primary: '#5e4b8b', secondary: '#5e4b8b'} : {primary: '#CF4747', secondary: '#CF4747'}
        }) as Event) as Event[];
      })
    );

  public events: Event[] = [];

  constructor(
    private afs: AngularFirestore,
    private modal: NgxSmartModalService,
    private auth: AuthService
  ) { }

  get mesLabel(): string { return moment(this.viewDate).format('MMMM - YYYY'); }

  ngOnInit() {

    this.auth.user$.subscribe(user => {
      if (user) {
        this.afs.collection(Collections.USER).doc<User>(user.uid).valueChanges()
          .subscribe(u => this.completedTasks = u.completedTasks ? u.completedTasks : []);
        this.events$.subscribe(events => {
          if (this.events.length < 1) { this.events = events.filter(e => {
            if (e.unlockedBy) {
              console.log(e.unlockedBy, !!user[e.unlockedBy]);
              return !!user[e.unlockedBy];
            } else {
              return true;
            }
          }); }
        });
      }
    });

  }

  dayClicked(day: any) {
    this.dayEvents = day.events as Event[];
    if (day.events && day.events.length > 0) { this.modal.getModal('eventsModal').open() }
  }

  loadEvents(uid: string) {
    this.events$ = this.afs.collection(Collections.USER).doc<User>(uid)
      .valueChanges()
      .pipe(
        map(user => {
          if (!user.customCalendar) { return []; }
          const events = flattenDeep(Object.values(user.customCalendar));
          console.log('events', events);
          return events.map((e: any) => ({
            id: 'TESSSST',
            ...e,
            start: new Date(e.start),
            title: 'Evento Test',
            desc: 'TEST',
            date: new Date().toISOString(),
            tasks: [],
            links: [],
            color: user.completedTasks.indexOf('TESSSST') >= 0 ?
              {primary: '#5e4b8b', secondary: '#5e4b8b'} : {primary: '#CF4747', secondary: '#CF4747'}
          })) as Event[];
        })
      );
  }

  eventCheckChanged(e: {id: string, added: boolean}) {
    console.log(this.completedTasks);
    this.events = this.events.map(event => event.id === e.id ? ({
      ...event,
      color: this.completedTasks.indexOf(event.id) >= 0 ? {primary: '#5e4b8b', secondary: '#5e4b8b'} : {primary: '#CF4747', secondary: '#CF4747'}
    }) : event);
  }

}
