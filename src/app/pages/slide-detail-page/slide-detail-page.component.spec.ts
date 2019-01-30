import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDetailPageComponent } from './slide-detail-page.component';

describe('SlideDetailPageComponent', () => {
  let component: SlideDetailPageComponent;
  let fixture: ComponentFixture<SlideDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
