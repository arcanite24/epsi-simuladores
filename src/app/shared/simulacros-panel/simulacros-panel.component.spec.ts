import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacrosPanelComponent } from './simulacros-panel.component';

describe('SimulacrosPanelComponent', () => {
  let component: SimulacrosPanelComponent;
  let fixture: ComponentFixture<SimulacrosPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulacrosPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacrosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
