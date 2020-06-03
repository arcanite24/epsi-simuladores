import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadCategoryDetailPageComponent } from './thread-category-detail-page.component';

describe('ThreadCategoryDetailPageComponent', () => {
  let component: ThreadCategoryDetailPageComponent;
  let fixture: ComponentFixture<ThreadCategoryDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadCategoryDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadCategoryDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
