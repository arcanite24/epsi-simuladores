import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoPanelComponent } from './profile-info-panel.component';

describe('ProfileInfoPanelComponent', () => {
  let component: ProfileInfoPanelComponent;
  let fixture: ComponentFixture<ProfileInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
