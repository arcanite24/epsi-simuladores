import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatUserMonthAverageComponent } from './stat-user-month-average.component';

describe('StatUserMonthAverageComponent', () => {
  let component: StatUserMonthAverageComponent;
  let fixture: ComponentFixture<StatUserMonthAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatUserMonthAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatUserMonthAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
