import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoQuejasAsignadasComponent } from './seguimiento-quejas-asignadas.component';

describe('SeguimientoQuejasAsignadasComponent', () => {
  let component: SeguimientoQuejasAsignadasComponent;
  let fixture: ComponentFixture<SeguimientoQuejasAsignadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoQuejasAsignadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoQuejasAsignadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
