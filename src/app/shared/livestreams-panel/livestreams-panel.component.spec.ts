import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestreamsPanelComponent } from './livestreams-panel.component';

describe('LivestreamsPanelComponent', () => {
  let component: LivestreamsPanelComponent;
  let fixture: ComponentFixture<LivestreamsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestreamsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestreamsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
