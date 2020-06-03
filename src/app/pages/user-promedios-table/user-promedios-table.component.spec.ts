import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPromediosTableComponent } from './user-promedios-table.component';

describe('UserPromediosTableComponent', () => {
  let component: UserPromediosTableComponent;
  let fixture: ComponentFixture<UserPromediosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPromediosTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPromediosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
