import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatUserTagsAverageComponent } from './stat-user-tags-average.component';

describe('StatUserTagsAverageComponent', () => {
  let component: StatUserTagsAverageComponent;
  let fixture: ComponentFixture<StatUserTagsAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatUserTagsAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatUserTagsAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
