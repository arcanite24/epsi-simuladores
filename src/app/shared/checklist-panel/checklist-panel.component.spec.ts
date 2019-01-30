import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistPanelComponent } from './checklist-panel.component';

describe('ChecklistPanelComponent', () => {
  let component: ChecklistPanelComponent;
  let fixture: ComponentFixture<ChecklistPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
