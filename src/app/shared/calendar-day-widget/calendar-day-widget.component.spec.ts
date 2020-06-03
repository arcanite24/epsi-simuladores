import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDayWidgetComponent } from './calendar-day-widget.component';

describe('CalendarDayWidgetComponent', () => {
  let component: CalendarDayWidgetComponent;
  let fixture: ComponentFixture<CalendarDayWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDayWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDayWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
