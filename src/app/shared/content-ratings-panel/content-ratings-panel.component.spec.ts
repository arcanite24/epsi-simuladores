import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRatingsPanelComponent } from './content-ratings-panel.component';

describe('ContentRatingsPanelComponent', () => {
  let component: ContentRatingsPanelComponent;
  let fixture: ComponentFixture<ContentRatingsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentRatingsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRatingsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
