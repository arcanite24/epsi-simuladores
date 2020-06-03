import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdTextsComponent } from './admin-ad-texts.component';

describe('AdminAdTextsComponent', () => {
  let component: AdminAdTextsComponent;
  let fixture: ComponentFixture<AdminAdTextsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdTextsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
