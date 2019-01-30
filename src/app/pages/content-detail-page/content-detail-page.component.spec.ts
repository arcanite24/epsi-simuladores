import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailPageComponent } from './content-detail-page.component';

describe('ContentDetailPageComponent', () => {
  let component: ContentDetailPageComponent;
  let fixture: ComponentFixture<ContentDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
