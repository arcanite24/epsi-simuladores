import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatStructureAdminPanelComponent } from './stat-structure-admin-panel.component';

describe('StatStructureAdminPanelComponent', () => {
  let component: StatStructureAdminPanelComponent;
  let fixture: ComponentFixture<StatStructureAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatStructureAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatStructureAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
