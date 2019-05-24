import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDailyComponent } from './admin-daily.component';

describe('AdminDailyComponent', () => {
  let component: AdminDailyComponent;
  let fixture: ComponentFixture<AdminDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
