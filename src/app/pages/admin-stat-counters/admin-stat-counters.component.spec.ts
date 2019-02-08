import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatCountersComponent } from './admin-stat-counters.component';

describe('AdminStatCountersComponent', () => {
  let component: AdminStatCountersComponent;
  let fixture: ComponentFixture<AdminStatCountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStatCountersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
