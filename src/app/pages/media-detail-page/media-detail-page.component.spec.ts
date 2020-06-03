import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDetailPageComponent } from './media-detail-page.component';

describe('MediaDetailPageComponent', () => {
  let component: MediaDetailPageComponent;
  let fixture: ComponentFixture<MediaDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
