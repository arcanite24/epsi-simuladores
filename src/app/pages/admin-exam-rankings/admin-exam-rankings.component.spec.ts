import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExamRankingsComponent } from './admin-exam-rankings.component';

describe('AdminExamRankingsComponent', () => {
  let component: AdminExamRankingsComponent;
  let fixture: ComponentFixture<AdminExamRankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExamRankingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExamRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
