import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsPoolPanelComponent } from './tags-pool-panel.component';

describe('TagsPoolPanelComponent', () => {
  let component: TagsPoolPanelComponent;
  let fixture: ComponentFixture<TagsPoolPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsPoolPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsPoolPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
