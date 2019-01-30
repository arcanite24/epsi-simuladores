import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladoresPanelComponent } from './simuladores-panel.component';

describe('SimuladoresPanelComponent', () => {
  let component: SimuladoresPanelComponent;
  let fixture: ComponentFixture<SimuladoresPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladoresPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladoresPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
