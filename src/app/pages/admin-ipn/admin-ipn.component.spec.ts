import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIpnComponent } from './admin-ipn.component';

describe('AdminIpnComponent', () => {
  let component: AdminIpnComponent;
  let fixture: ComponentFixture<AdminIpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIpnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
