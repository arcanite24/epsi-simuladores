import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDetailPageComponent } from './pdf-detail-page.component';

describe('PdfDetailPageComponent', () => {
  let component: PdfDetailPageComponent;
  let fixture: ComponentFixture<PdfDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
