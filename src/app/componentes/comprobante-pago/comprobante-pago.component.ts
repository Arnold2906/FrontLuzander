import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Router } from '@angular/router';
import {ProductosService} from '../../servicios/productos.service';

@Component({
  selector: 'app-comprobante-pago',
  templateUrl: './comprobante-pago.component.html',
  styleUrls: ['./comprobante-pago.component.css']
})
export class ComprobantePagoComponent {

  @ViewChild('content') content: ElementRef;
  public productos: any[];
  public total: number = 0;
  public cantidad: number = 0;
  public Pfecha: string;
  public PHora: string;
  public CUsuario: any;
  public IGV: number = 0;

  constructor(public router: Router,private ps: ProductosService) {
    this.CUsuario = JSON.parse(localStorage.getItem("usuario"));
    console.log(this.CUsuario);
    this.productos = JSON.parse(localStorage.getItem("carrito"));
    this.sumaTotal();
    this.fecha();
    this.IGV =  (this.total * 18) / 100;
  }

  

  sumaTotal(){
    this.productos.forEach(element => {

      this.total = this.total +  Number(element.precio);
      this.cantidad = this.cantidad + 1;

    });
    //console.log(this.total);
    
  }


  fecha() {
    let fechaActual = new Date();
    let dia = fechaActual.getDate().toString();
    let mes = (fechaActual.getMonth() + 1).toString();
    let anio = fechaActual.getFullYear().toString();
    let hora = fechaActual.getHours().toString();
    let minutos = fechaActual.getMinutes().toString();
    let segundos = fechaActual.getSeconds().toString();
    this.Pfecha = anio + "-" + mes + "-" + dia;
    this.PHora = hora + ":" + minutos + ":" + segundos;

  }

  public descargarPDF(){
    let doc = new jsPDF();

    let specialElementHandlers = {
      "#editor": function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

     doc.fromHTML(content.innerHTML,10,10,{
       'width': 190,
       'elementHandlers': specialElementHandlers
     });

     doc.save('comprobante.pdf');
  }

}
