import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesPanelComponent } from './galleries-panel.component';

describe('GalleriesPanelComponent', () => {
  let component: GalleriesPanelComponent;
  let fixture: ComponentFixture<GalleriesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
