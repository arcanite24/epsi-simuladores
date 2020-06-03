import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentModelAltComponent } from './payment-model-alt.component';

describe('PaymentModelAltComponent', () => {
  let component: PaymentModelAltComponent;
  let fixture: ComponentFixture<PaymentModelAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentModelAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentModelAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
