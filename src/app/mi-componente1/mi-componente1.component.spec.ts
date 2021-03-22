import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComponente1Component } from './mi-componente1.component';

describe('MiComponente1Component', () => {
  let component: MiComponente1Component;
  let fixture: ComponentFixture<MiComponente1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiComponente1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiComponente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
