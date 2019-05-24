import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPitPanelComponent } from './ad-pit-panel.component';

describe('AdPitPanelComponent', () => {
  let component: AdPitPanelComponent;
  let fixture: ComponentFixture<AdPitPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPitPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPitPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
