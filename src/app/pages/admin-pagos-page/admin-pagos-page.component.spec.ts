import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagosPageComponent } from './admin-pagos-page.component';

describe('AdminPagosPageComponent', () => {
  let component: AdminPagosPageComponent;
  let fixture: ComponentFixture<AdminPagosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPagosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
