import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsPoolModalComponent } from './tags-pool-modal.component';

describe('TagsPoolModalComponent', () => {
  let component: TagsPoolModalComponent;
  let fixture: ComponentFixture<TagsPoolModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsPoolModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsPoolModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
