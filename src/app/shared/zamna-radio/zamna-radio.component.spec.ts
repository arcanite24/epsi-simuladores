import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZamnaRadioComponent } from './zamna-radio.component';

describe('ZamnaRadioComponent', () => {
  let component: ZamnaRadioComponent;
  let fixture: ComponentFixture<ZamnaRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZamnaRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZamnaRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
