import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadDetailPageComponent } from './thread-detail-page.component';

describe('ThreadDetailPageComponent', () => {
  let component: ThreadDetailPageComponent;
  let fixture: ComponentFixture<ThreadDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
