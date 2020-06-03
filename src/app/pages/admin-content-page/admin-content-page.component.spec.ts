import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentPageComponent } from './admin-content-page.component';

describe('AdminContentPageComponent', () => {
  let component: AdminContentPageComponent;
  let fixture: ComponentFixture<AdminContentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
