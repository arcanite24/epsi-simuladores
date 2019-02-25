import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentErrorAddComponent } from './content-error-add.component';

describe('ContentErrorAddComponent', () => {
  let component: ContentErrorAddComponent;
  let fixture: ComponentFixture<ContentErrorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentErrorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentErrorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
