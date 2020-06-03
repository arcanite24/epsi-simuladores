import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatViewEditComponent } from './stat-view-edit.component';

describe('StatViewEditComponent', () => {
  let component: StatViewEditComponent;
  let fixture: ComponentFixture<StatViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
