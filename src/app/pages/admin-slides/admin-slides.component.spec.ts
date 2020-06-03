import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSlidesComponent } from './admin-slides.component';

describe('AdminSlidesComponent', () => {
  let component: AdminSlidesComponent;
  let fixture: ComponentFixture<AdminSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSlidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
