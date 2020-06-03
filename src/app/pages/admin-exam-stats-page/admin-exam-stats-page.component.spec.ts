import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExamStatsPageComponent } from './admin-exam-stats-page.component';

describe('AdminExamStatsPageComponent', () => {
  let component: AdminExamStatsPageComponent;
  let fixture: ComponentFixture<AdminExamStatsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExamStatsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExamStatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
