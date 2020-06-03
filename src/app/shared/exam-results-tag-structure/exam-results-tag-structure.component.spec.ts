import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultsTagStructureComponent } from './exam-results-tag-structure.component';

describe('ExamResultsTagStructureComponent', () => {
  let component: ExamResultsTagStructureComponent;
  let fixture: ComponentFixture<ExamResultsTagStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamResultsTagStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamResultsTagStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
