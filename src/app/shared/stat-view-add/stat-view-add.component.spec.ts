import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatViewAddComponent } from './stat-view-add.component';

describe('StatViewAddComponent', () => {
  let component: StatViewAddComponent;
  let fixture: ComponentFixture<StatViewAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatViewAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatViewAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
