import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUsersPanelComponent } from './top-users-panel.component';

describe('TopUsersPanelComponent', () => {
  let component: TopUsersPanelComponent;
  let fixture: ComponentFixture<TopUsersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopUsersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUsersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
