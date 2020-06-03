import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaListPageComponent } from './media-list-page.component';

describe('MediaListPageComponent', () => {
  let component: MediaListPageComponent;
  let fixture: ComponentFixture<MediaListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
