import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostCommentsComponent } from './feed-post-comments.component';

describe('FeedPostCommentsComponent', () => {
  let component: FeedPostCommentsComponent;
  let fixture: ComponentFixture<FeedPostCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedPostCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
