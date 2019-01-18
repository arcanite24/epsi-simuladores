import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageUploaderComponent } from './storage-uploader.component';

describe('StorageUploaderComponent', () => {
  let component: StorageUploaderComponent;
  let fixture: ComponentFixture<StorageUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
