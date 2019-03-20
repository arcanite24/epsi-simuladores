import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTagsPoolComponent } from './admin-tags-pool.component';

describe('AdminTagsPoolComponent', () => {
  let component: AdminTagsPoolComponent;
  let fixture: ComponentFixture<AdminTagsPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTagsPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTagsPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
