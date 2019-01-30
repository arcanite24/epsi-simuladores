import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatUserPerformanceComponent } from './stat-user-performance.component';

describe('StatUserPerformanceComponent', () => {
  let component: StatUserPerformanceComponent;
  let fixture: ComponentFixture<StatUserPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatUserPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatUserPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
