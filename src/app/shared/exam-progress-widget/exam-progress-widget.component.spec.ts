import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamProgressWidgetComponent } from './exam-progress-widget.component';

describe('ExamProgressWidgetComponent', () => {
  let component: ExamProgressWidgetComponent;
  let fixture: ComponentFixture<ExamProgressWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamProgressWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamProgressWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
