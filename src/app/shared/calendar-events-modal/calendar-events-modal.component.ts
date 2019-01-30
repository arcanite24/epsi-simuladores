import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/app.models';

@Component({
  selector: 'epsi-calendar-events-modal',
  templateUrl: './calendar-events-modal.component.html',
  styleUrls: ['./calendar-events-modal.component.scss']
})
export class CalendarEventsModalComponent implements OnInit {

  @Input() public events: Event[]

  constructor() { }

  ngOnInit() {
  }

}
