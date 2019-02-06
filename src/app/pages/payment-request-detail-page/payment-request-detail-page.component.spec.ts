import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRequestDetailPageComponent } from './payment-request-detail-page.component';

describe('PaymentRequestDetailPageComponent', () => {
  let component: PaymentRequestDetailPageComponent;
  let fixture: ComponentFixture<PaymentRequestDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRequestDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRequestDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
