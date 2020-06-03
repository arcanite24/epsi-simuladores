import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolUploaderComponent } from './tool-uploader.component';

describe('ToolUploaderComponent', () => {
  let component: ToolUploaderComponent;
  let fixture: ComponentFixture<ToolUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
