import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTableFullEditComponent } from './crud-table-full-edit.component';

describe('CrudTableFullEditComponent', () => {
  let component: CrudTableFullEditComponent;
  let fixture: ComponentFixture<CrudTableFullEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTableFullEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTableFullEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
