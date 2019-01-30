import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatStructureItemComponent } from './stat-structure-item.component';

describe('StatStructureItemComponent', () => {
  let component: StatStructureItemComponent;
  let fixture: ComponentFixture<StatStructureItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatStructureItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatStructureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
