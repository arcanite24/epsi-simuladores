import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioPageComponent } from './cuestionario-page.component';

describe('CuestionarioPageComponent', () => {
  let component: CuestionarioPageComponent;
  let fixture: ComponentFixture<CuestionarioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuestionarioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
