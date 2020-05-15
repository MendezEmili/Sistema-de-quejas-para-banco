import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasIgresadasComponent } from './quejas-igresadas.component';

describe('QuejasIgresadasComponent', () => {
  let component: QuejasIgresadasComponent;
  let fixture: ComponentFixture<QuejasIgresadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuejasIgresadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejasIgresadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
