import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLivestreamsComponent } from './admin-livestreams.component';

describe('AdminLivestreamsComponent', () => {
  let component: AdminLivestreamsComponent;
  let fixture: ComponentFixture<AdminLivestreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLivestreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLivestreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
