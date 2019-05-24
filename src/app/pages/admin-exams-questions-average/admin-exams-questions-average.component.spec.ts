import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExamsQuestionsAverageComponent } from './admin-exams-questions-average.component';

describe('AdminExamsQuestionsAverageComponent', () => {
  let component: AdminExamsQuestionsAverageComponent;
  let fixture: ComponentFixture<AdminExamsQuestionsAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExamsQuestionsAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExamsQuestionsAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
