import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTileComponent } from './admin-tile.component';

describe('AdminTileComponent', () => {
  let component: AdminTileComponent;
  let fixture: ComponentFixture<AdminTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
