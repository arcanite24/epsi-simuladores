import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaAltBloquePageComponent } from './programa-alt-bloque-page.component';

describe('ProgramaAltBloquePageComponent', () => {
  let component: ProgramaAltBloquePageComponent;
  let fixture: ComponentFixture<ProgramaAltBloquePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaAltBloquePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaAltBloquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
