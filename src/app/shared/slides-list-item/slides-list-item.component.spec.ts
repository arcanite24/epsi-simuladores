import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesListItemComponent } from './slides-list-item.component';

describe('SlidesListItemComponent', () => {
  let component: SlidesListItemComponent;
  let fixture: ComponentFixture<SlidesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
