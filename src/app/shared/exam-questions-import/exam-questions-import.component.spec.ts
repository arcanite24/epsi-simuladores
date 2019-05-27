import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamQuestionsImportComponent } from './exam-questions-import.component';

describe('ExamQuestionsImportComponent', () => {
  let component: ExamQuestionsImportComponent;
  let fixture: ComponentFixture<ExamQuestionsImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamQuestionsImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamQuestionsImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
