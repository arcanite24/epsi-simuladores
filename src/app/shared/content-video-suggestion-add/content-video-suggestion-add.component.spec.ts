import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentVideoSuggestionAddComponent } from './content-video-suggestion-add.component';

describe('ContentVideoSuggestionAddComponent', () => {
  let component: ContentVideoSuggestionAddComponent;
  let fixture: ComponentFixture<ContentVideoSuggestionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentVideoSuggestionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentVideoSuggestionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
