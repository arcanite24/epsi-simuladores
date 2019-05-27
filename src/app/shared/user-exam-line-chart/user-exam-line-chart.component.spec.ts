import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExamLineChartComponent } from './user-exam-line-chart.component';

describe('UserExamLineChartComponent', () => {
  let component: UserExamLineChartComponent;
  let fixture: ComponentFixture<UserExamLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExamLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExamLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
