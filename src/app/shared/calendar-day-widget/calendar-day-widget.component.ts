import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/app.models';

@Component({
  selector: 'epsi-calendar-day-widget',
  templateUrl: './calendar-day-widget.component.html',
  styleUrls: ['./calendar-day-widget.component.scss']
})
export class CalendarDayWidgetComponent implements OnInit {

  @Input() public events: Event[]

  constructor() { }

  ngOnInit() {
  }

}
