import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaEnarmPanelComponent } from './zona-enarm-panel.component';

describe('ZonaEnarmPanelComponent', () => {
  let component: ZonaEnarmPanelComponent;
  let fixture: ComponentFixture<ZonaEnarmPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaEnarmPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaEnarmPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
