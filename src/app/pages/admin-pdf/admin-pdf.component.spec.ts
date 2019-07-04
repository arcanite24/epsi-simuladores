import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPdfComponent } from './admin-pdf.component';

describe('AdminPdfComponent', () => {
  let component: AdminPdfComponent;
  let fixture: ComponentFixture<AdminPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
