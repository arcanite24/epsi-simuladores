import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaAltMateriaPageComponent } from './programa-alt-materia-page.component';

describe('ProgramaAltMateriaPageComponent', () => {
  let component: ProgramaAltMateriaPageComponent;
  let fixture: ComponentFixture<ProgramaAltMateriaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaAltMateriaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaAltMateriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
