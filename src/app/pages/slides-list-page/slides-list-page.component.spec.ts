import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesListPageComponent } from './slides-list-page.component';

describe('SlidesListPageComponent', () => {
  let component: SlidesListPageComponent;
  let fixture: ComponentFixture<SlidesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
