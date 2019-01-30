import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamQuestionsWidgetComponent } from './exam-questions-widget.component';

describe('ExamQuestionsWidgetComponent', () => {
  let component: ExamQuestionsWidgetComponent;
  let fixture: ComponentFixture<ExamQuestionsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamQuestionsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamQuestionsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
