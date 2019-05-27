import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExamResultsComponent } from './user-exam-results.component';

describe('UserExamResultsComponent', () => {
  let component: UserExamResultsComponent;
  let fixture: ComponentFixture<UserExamResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExamResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
