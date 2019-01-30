import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatUserStructurePanelComponent } from './stat-user-structure-panel.component';

describe('StatUserStructurePanelComponent', () => {
  let component: StatUserStructurePanelComponent;
  let fixture: ComponentFixture<StatUserStructurePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatUserStructurePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatUserStructurePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
