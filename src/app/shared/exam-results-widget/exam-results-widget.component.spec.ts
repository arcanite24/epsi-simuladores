import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultsWidgetComponent } from './exam-results-widget.component';

describe('ExamResultsWidgetComponent', () => {
  let component: ExamResultsWidgetComponent;
  let fixture: ComponentFixture<ExamResultsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamResultsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamResultsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
