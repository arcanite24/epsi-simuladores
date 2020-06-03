import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRankingAddComponent } from './exam-ranking-add.component';

describe('ExamRankingAddComponent', () => {
  let component: ExamRankingAddComponent;
  let fixture: ComponentFixture<ExamRankingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRankingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRankingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
