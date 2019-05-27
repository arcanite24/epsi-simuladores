import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMateriasPromediosComponent } from './user-materias-promedios.component';

describe('UserMateriasPromediosComponent', () => {
  let component: UserMateriasPromediosComponent;
  let fixture: ComponentFixture<UserMateriasPromediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMateriasPromediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMateriasPromediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
