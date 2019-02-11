import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamQuestionsByGroupWidgetComponent } from './exam-questions-by-group-widget.component';

describe('ExamQuestionsByGroupWidgetComponent', () => {
  let component: ExamQuestionsByGroupWidgetComponent;
  let fixture: ComponentFixture<ExamQuestionsByGroupWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamQuestionsByGroupWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamQuestionsByGroupWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
