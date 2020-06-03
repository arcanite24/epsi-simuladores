import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPageAltComponent } from './payment-page-alt.component';

describe('PaymentPageAltComponent', () => {
  let component: PaymentPageAltComponent;
  let fixture: ComponentFixture<PaymentPageAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPageAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPageAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
