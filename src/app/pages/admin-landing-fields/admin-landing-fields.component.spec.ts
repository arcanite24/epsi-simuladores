import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandingFieldsComponent } from './admin-landing-fields.component';

describe('AdminLandingFieldsComponent', () => {
  let component: AdminLandingFieldsComponent;
  let fixture: ComponentFixture<AdminLandingFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLandingFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLandingFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
