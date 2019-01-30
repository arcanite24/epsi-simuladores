import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNotesPanelComponent } from './content-notes-panel.component';

describe('ContentNotesPanelComponent', () => {
  let component: ContentNotesPanelComponent;
  let fixture: ComponentFixture<ContentNotesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentNotesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNotesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
