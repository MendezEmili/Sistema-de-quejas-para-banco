import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarComponent } from './modificar.component';

describe('ModificarComponent', () => {
  let component: ModificarComponent;
  let fixture: ComponentFixture<ModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
