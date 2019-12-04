import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMigration2020Component } from './admin-migration2020.component';

describe('AdminMigration2020Component', () => {
  let component: AdminMigration2020Component;
  let fixture: ComponentFixture<AdminMigration2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMigration2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMigration2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
