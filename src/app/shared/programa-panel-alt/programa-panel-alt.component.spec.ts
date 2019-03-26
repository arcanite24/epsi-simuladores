import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaPanelAltComponent } from './programa-panel-alt.component';

describe('ProgramaPanelAltComponent', () => {
  let component: ProgramaPanelAltComponent;
  let fixture: ComponentFixture<ProgramaPanelAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaPanelAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaPanelAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
