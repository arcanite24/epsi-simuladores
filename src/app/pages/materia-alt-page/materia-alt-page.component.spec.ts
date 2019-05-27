import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaAltPageComponent } from './materia-alt-page.component';

describe('MateriaAltPageComponent', () => {
  let component: MateriaAltPageComponent;
  let fixture: ComponentFixture<MateriaAltPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaAltPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaAltPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
