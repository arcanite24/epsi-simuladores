import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildListComponent } from './content-child-list.component';

describe('ContentChildListComponent', () => {
  let component: ContentChildListComponent;
  let fixture: ComponentFixture<ContentChildListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentChildListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentChildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
