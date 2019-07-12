import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHelpRequestComponent } from './admin-help-request.component';

describe('AdminHelpRequestComponent', () => {
  let component: AdminHelpRequestComponent;
  let fixture: ComponentFixture<AdminHelpRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHelpRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHelpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
