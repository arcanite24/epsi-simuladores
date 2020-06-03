import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatUserTimelineComponent } from './stat-user-timeline.component';

describe('StatUserTimelineComponent', () => {
  let component: StatUserTimelineComponent;
  let fixture: ComponentFixture<StatUserTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatUserTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatUserTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
