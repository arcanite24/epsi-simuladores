import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventsModalComponent } from './calendar-events-modal.component';

describe('CalendarEventsModalComponent', () => {
  let component: CalendarEventsModalComponent;
  let fixture: ComponentFixture<CalendarEventsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEventsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
