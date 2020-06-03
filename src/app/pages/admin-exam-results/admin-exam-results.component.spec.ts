import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExamResultsComponent } from './admin-exam-results.component';

describe('AdminExamResultsComponent', () => {
  let component: AdminExamResultsComponent;
  let fixture: ComponentFixture<AdminExamResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExamResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
