import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatUserGeneralAverageComponent } from './stat-user-general-average.component';

describe('StatUserGeneralAverageComponent', () => {
  let component: StatUserGeneralAverageComponent;
  let fixture: ComponentFixture<StatUserGeneralAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatUserGeneralAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatUserGeneralAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
