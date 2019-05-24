import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotiAddComponent } from './user-noti-add.component';

describe('UserNotiAddComponent', () => {
  let component: UserNotiAddComponent;
  let fixture: ComponentFixture<UserNotiAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNotiAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
