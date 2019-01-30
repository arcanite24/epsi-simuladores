import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCommentsPanelComponent } from './content-comments-panel.component';

describe('ContentCommentsPanelComponent', () => {
  let component: ContentCommentsPanelComponent;
  let fixture: ComponentFixture<ContentCommentsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCommentsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCommentsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
