import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentErrorModalComponent } from './content-error-modal.component';

describe('ContentErrorModalComponent', () => {
  let component: ContentErrorModalComponent;
  let fixture: ComponentFixture<ContentErrorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentErrorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
