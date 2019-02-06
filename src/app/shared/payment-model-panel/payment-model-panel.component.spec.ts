import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentModelPanelComponent } from './payment-model-panel.component';

describe('PaymentModelPanelComponent', () => {
  let component: PaymentModelPanelComponent;
  let fixture: ComponentFixture<PaymentModelPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentModelPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentModelPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
