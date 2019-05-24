import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasPanelComponent } from './materias-panel.component';

describe('MateriasPanelComponent', () => {
  let component: MateriasPanelComponent;
  let fixture: ComponentFixture<MateriasPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
