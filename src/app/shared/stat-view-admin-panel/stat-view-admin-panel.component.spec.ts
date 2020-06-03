import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatViewAdminPanelComponent } from './stat-view-admin-panel.component';

describe('StatViewAdminPanelComponent', () => {
  let component: StatViewAdminPanelComponent;
  let fixture: ComponentFixture<StatViewAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatViewAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatViewAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
