import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPremiumUpgradePanelComponent } from './ad-premium-upgrade-panel.component';

describe('AdPremiumUpgradePanelComponent', () => {
  let component: AdPremiumUpgradePanelComponent;
  let fixture: ComponentFixture<AdPremiumUpgradePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPremiumUpgradePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPremiumUpgradePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
