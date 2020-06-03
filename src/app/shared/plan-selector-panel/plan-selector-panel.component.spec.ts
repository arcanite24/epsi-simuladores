import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSelectorPanelComponent } from './plan-selector-panel.component';

describe('PlanSelectorPanelComponent', () => {
  let component: PlanSelectorPanelComponent;
  let fixture: ComponentFixture<PlanSelectorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanSelectorPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSelectorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
