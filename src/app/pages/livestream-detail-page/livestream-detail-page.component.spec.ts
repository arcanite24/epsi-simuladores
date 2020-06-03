import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestreamDetailPageComponent } from './livestream-detail-page.component';

describe('LivestreamDetailPageComponent', () => {
  let component: LivestreamDetailPageComponent;
  let fixture: ComponentFixture<LivestreamDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestreamDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestreamDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
