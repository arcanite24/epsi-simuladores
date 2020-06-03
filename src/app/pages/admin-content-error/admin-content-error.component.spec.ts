import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentErrorComponent } from './admin-content-error.component';

describe('AdminContentErrorComponent', () => {
  let component: AdminContentErrorComponent;
  let fixture: ComponentFixture<AdminContentErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContentErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
