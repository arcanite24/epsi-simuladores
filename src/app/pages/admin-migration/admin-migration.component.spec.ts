import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMigrationComponent } from './admin-migration.component';

describe('AdminMigrationComponent', () => {
  let component: AdminMigrationComponent;
  let fixture: ComponentFixture<AdminMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
