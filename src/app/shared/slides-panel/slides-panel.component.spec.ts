import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesPanelComponent } from './slides-panel.component';

describe('SlidesPanelComponent', () => {
  let component: SlidesPanelComponent;
  let fixture: ComponentFixture<SlidesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
