import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCalendarPanelComponent } from './smart-calendar-panel.component';

describe('SmartCalendarPanelComponent', () => {
  let component: SmartCalendarPanelComponent;
  let fixture: ComponentFixture<SmartCalendarPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCalendarPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCalendarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
