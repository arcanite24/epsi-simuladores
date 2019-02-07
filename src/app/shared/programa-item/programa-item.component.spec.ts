import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaItemComponent } from './programa-item.component';

describe('ProgramaItemComponent', () => {
  let component: ProgramaItemComponent;
  let fixture: ComponentFixture<ProgramaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
