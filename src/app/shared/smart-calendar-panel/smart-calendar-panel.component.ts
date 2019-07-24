import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subject, Subscription} from 'rxjs';
import { Event, Collections, User } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';
import moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { CalendarView } from 'angular-calendar';
import { flattenDeep } from 'lodash';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'epsi-smart-calendar-panel',
  templateUrl: './smart-calendar-panel.component.html',
  styleUrls: ['./smart-calendar-panel.component.scss']
})
export class SmartCalendarPanelComponent implements OnInit, OnDestroy {

  public viewDate: Date = new Date();
  public view: CalendarView = CalendarView.Month;

  public dayEvents: Event[];
  public completedTasks: string[] = [];

  public events$: Observable<Event[]>;
  public events: Event[] = [];
  public loadedEvents: string[] = [];

  private userSub: Subscription;

  public refresh: Subject<any> = new Subject();

  constructor(
    private afs: AngularFirestore,
    private modal: NgxSmartModalService,
    public auth: AuthService,
    private data: DataService,
    private zone: NgZone
  ) { }

  get mesLabel(): string { return moment(this.viewDate).format('MMMM - YYYY'); }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.afs.collection(Collections.USER).doc<User>(user.uid).valueChanges().subscribe(u => this.completedTasks = u.completedTasks ? u.completedTasks : []);
        if (!this.events$) { this.loadEvents(user.uid); }
      }
    });
  }

  dayClicked(day: any) {
    this.dayEvents = day.events as Event[];
    if (day.events && day.events.length > 0) { this.modal.getModal('eventsModal').open(); }
  }

  loadEvents(uid: string) {

    this.userSub = this.afs.collection(Collections.USER).doc<User>(uid)
      .valueChanges()
      .subscribe(async user => {

        if (!user.customCalendar) { return; }

        const events = flattenDeep(Object.values(user.customCalendar)) as any[];

        if (!user.completedTasks) { user.completedTasks = []; }
        this.completedTasks = user.completedTasks;

        /*let formatedEvents = []*/
        if (this.events.length > 0) { return; }

        for (const e of events) {
          if (e.event && !this.loadedEvents.includes(e.event)) {

            const eventDoc = await this.data.getDocAlt<Event>(Collections.EVENT, e.event);

            if (eventDoc.unlockedBy) {
              if (!user[eventDoc.unlockedBy]) { return; }
            }

            setTimeout(() => {
              this.events.push({
                // id: `smart-calendar-event-${e.content}`,
                ...e,
                id: eventDoc.id,
                start: new Date(e.start),
                title: e.content_name,
                desc: eventDoc.desc,
                date: new Date().toISOString(),
                tasks: eventDoc.tasks,
                links: eventDoc.links,
                color: this.completedTasks.indexOf(eventDoc.id) >= 0 ? {
                  primary: '#5e4b8b',
                  secondary: '#5e4b8b'
                } : {
                  primary: '#CF4747',
                  secondary: '#CF4747'
                }
              });
              this.refresh.next();
              this.loadedEvents.push(e.event);
            }, 100);

          }
        }

        /*this.events$ = of(formatedEvents)*/

      });

    /*this.events$ = this.afs.collection(Collections.USER).doc<User>(uid)
      .valueChanges()
      .pipe(
        map(user => {
          if (!user.customCalendar) return []
          const events = flattenDeep(Object.values(user.customCalendar))
          console.log(events)
          if (!user.completedTasks) user.completedTasks = []
          return events.map((e: any) => ({
            id: `smart-calendar-event-${e.content}`,
            ...e,
            start: new Date(e.start),
            title: e.content_name,
            desc: '',
            date: new Date().toISOString(),
            tasks: [],
            links: [],
            color: user.completedTasks.indexOf('TESSSST') >= 0 ? {primary: '#5e4b8b', secondary: '#5e4b8b'} : {primary: '#CF4747', secondary: '#CF4747'}
          })) as Event[]
        })
      )*/

  }

  removeCalendar() {
    this.afs.collection(Collections.USER).doc(this.auth.user.uid).update({ customCalendar: null });
  }

  eventCheckChanged(e: {id: string, added: boolean}) {
    this.events = this.events.map(event => event.id === e.id ? ({
      ...event,
      color: this.completedTasks.indexOf(event.id) >= 0 ? {primary: '#5e4b8b', secondary: '#5e4b8b'} : {primary: '#CF4747', secondary: '#CF4747'}
    }) : event);
  }

}
