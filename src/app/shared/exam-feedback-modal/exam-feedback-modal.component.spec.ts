import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamFeedbackModalComponent } from './exam-feedback-modal.component';

describe('ExamFeedbackModalComponent', () => {
  let component: ExamFeedbackModalComponent;
  let fixture: ComponentFixture<ExamFeedbackModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamFeedbackModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamFeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
