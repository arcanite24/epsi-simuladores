import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesPanelItemComponent } from './galleries-panel-item.component';

describe('GalleriesPanelItemComponent', () => {
  let component: GalleriesPanelItemComponent;
  let fixture: ComponentFixture<GalleriesPanelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriesPanelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriesPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
