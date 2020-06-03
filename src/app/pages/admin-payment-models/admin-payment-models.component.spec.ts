import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentModelsComponent } from './admin-payment-models.component';

describe('AdminPaymentModelsComponent', () => {
  let component: AdminPaymentModelsComponent;
  let fixture: ComponentFixture<AdminPaymentModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPaymentModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaymentModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
