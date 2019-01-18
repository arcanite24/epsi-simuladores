import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerEditItemComponent } from './answer-edit-item.component';

describe('AnswerEditItemComponent', () => {
  let component: AnswerEditItemComponent;
  let fixture: ComponentFixture<AnswerEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
