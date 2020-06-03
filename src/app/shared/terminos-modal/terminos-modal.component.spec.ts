import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosModalComponent } from './terminos-modal.component';

describe('TerminosModalComponent', () => {
  let component: TerminosModalComponent;
  let fixture: ComponentFixture<TerminosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
