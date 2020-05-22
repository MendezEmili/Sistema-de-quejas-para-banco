import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasProcesoAtencionComponent } from './quejas-proceso-atencion.component';

describe('QuejasProcesoAtencionComponent', () => {
  let component: QuejasProcesoAtencionComponent;
  let fixture: ComponentFixture<QuejasProcesoAtencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuejasProcesoAtencionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejasProcesoAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
