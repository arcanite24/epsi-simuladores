import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZamnaToggleComponent } from './zamna-toggle.component';

describe('ZamnaToggleComponent', () => {
  let component: ZamnaToggleComponent;
  let fixture: ComponentFixture<ZamnaToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZamnaToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZamnaToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
