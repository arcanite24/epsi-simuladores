import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZamnaCheckComponent } from './zamna-check.component';

describe('ZamnaCheckComponent', () => {
  let component: ZamnaCheckComponent;
  let fixture: ComponentFixture<ZamnaCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZamnaCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZamnaCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
