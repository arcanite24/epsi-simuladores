import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPanelComponent } from './forum-panel.component';

describe('ForumPanelComponent', () => {
  let component: ForumPanelComponent;
  let fixture: ComponentFixture<ForumPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
