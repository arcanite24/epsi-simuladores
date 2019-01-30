import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatViewDetailComponent } from './stat-view-detail.component';

describe('StatViewDetailComponent', () => {
  let component: StatViewDetailComponent;
  let fixture: ComponentFixture<StatViewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatViewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
