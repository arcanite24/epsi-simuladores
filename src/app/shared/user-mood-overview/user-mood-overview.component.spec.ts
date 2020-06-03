import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoodOverviewComponent } from './user-mood-overview.component';

describe('UserMoodOverviewComponent', () => {
  let component: UserMoodOverviewComponent;
  let fixture: ComponentFixture<UserMoodOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMoodOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMoodOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
