import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaPanelComponent } from './programa-panel.component';

describe('ProgramaPanelComponent', () => {
  let component: ProgramaPanelComponent;
  let fixture: ComponentFixture<ProgramaPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
