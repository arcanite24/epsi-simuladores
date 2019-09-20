import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfListPageComponent } from './pdf-list-page.component';

describe('PdfListPageComponent', () => {
  let component: PdfListPageComponent;
  let fixture: ComponentFixture<PdfListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
