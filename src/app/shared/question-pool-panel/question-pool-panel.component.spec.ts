import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPoolPanelComponent } from './question-pool-panel.component';

describe('QuestionPoolPanelComponent', () => {
  let component: QuestionPoolPanelComponent;
  let fixture: ComponentFixture<QuestionPoolPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPoolPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPoolPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
