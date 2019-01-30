import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostItemComponent } from './feed-post-item.component';

describe('FeedPostItemComponent', () => {
  let component: FeedPostItemComponent;
  let fixture: ComponentFixture<FeedPostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedPostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
