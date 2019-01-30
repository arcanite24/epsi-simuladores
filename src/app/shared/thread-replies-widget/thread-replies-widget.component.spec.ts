import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadRepliesWidgetComponent } from './thread-replies-widget.component';

describe('ThreadRepliesWidgetComponent', () => {
  let component: ThreadRepliesWidgetComponent;
  let fixture: ComponentFixture<ThreadRepliesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadRepliesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadRepliesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
