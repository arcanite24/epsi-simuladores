import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentVideoPanelComponent } from './content-video-panel.component';

describe('ContentVideoPanelComponent', () => {
  let component: ContentVideoPanelComponent;
  let fixture: ComponentFixture<ContentVideoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentVideoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentVideoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
