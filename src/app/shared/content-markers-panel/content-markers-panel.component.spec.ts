import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMarkersPanelComponent } from './content-markers-panel.component';

describe('ContentMarkersPanelComponent', () => {
  let component: ContentMarkersPanelComponent;
  let fixture: ComponentFixture<ContentMarkersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMarkersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMarkersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
