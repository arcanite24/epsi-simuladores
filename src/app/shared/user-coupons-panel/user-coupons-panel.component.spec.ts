import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCouponsPanelComponent } from './user-coupons-panel.component';

describe('UserCouponsPanelComponent', () => {
  let component: UserCouponsPanelComponent;
  let fixture: ComponentFixture<UserCouponsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCouponsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCouponsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
