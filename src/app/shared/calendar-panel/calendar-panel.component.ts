import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';
import moment from 'moment'

@Component({
  selector: 'epsi-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.scss']
})
export class CalendarPanelComponent implements OnInit {

  public viewDate: Date = new Date()
  public dayEvents: Event[]

  public events$: Observable<Event[]> = this.afs.collection<Event>(Collections.EVENT)
    .valueChanges()
    .pipe(
      map(events => {
        return events.map(e => ({ ...e, start: moment(e.date).startOf('day').toDate(), fullDay: true }) as Event) as Event[]
      })
    )

  constructor(
    private afs: AngularFirestore,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  dayClicked(day: any) {
    this.dayEvents = day.events as Event[]
    if (day.events && day.events.length > 0) this.modal.getModal('eventsModal').open()
  }

}
