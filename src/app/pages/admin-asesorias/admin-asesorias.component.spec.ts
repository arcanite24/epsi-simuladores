import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAsesoriasComponent } from './admin-asesorias.component';

describe('AdminAsesoriasComponent', () => {
  let component: AdminAsesoriasComponent;
  let fixture: ComponentFixture<AdminAsesoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAsesoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAsesoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
