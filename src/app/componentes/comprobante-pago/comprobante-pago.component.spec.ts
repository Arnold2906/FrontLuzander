import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantePagoComponent } from './comprobante-pago.component';

describe('ComprobantePagoComponent', () => {
  let component: ComprobantePagoComponent;
  let fixture: ComponentFixture<ComprobantePagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobantePagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
