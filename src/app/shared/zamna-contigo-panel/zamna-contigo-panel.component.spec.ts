import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZamnaContigoPanelComponent } from './zamna-contigo-panel.component';

describe('ZamnaContigoPanelComponent', () => {
  let component: ZamnaContigoPanelComponent;
  let fixture: ComponentFixture<ZamnaContigoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZamnaContigoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZamnaContigoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
