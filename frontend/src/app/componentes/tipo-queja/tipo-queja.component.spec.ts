import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoQuejaComponent } from './tipo-queja.component';

describe('TipoQuejaComponent', () => {
  let component: TipoQuejaComponent;
  let fixture: ComponentFixture<TipoQuejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoQuejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoQuejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
