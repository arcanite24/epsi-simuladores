import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRolesPanelComponent } from './user-roles-panel.component';

describe('UserRolesPanelComponent', () => {
  let component: UserRolesPanelComponent;
  let fixture: ComponentFixture<UserRolesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRolesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRolesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
