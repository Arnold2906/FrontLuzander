import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductosService} from '../../servicios/productos.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  public productos: any[];
  public total: number = 0;
  public cantidad: number = 0;
  public Pfecha: string;
  public PHora: string;
  public mes: string;
  public anio: string;

  constructor(public router:Router,private ps: ProductosService) { 
    this.productos = JSON.parse(localStorage.getItem("carrito"));
    console.log(this.productos);
    this.sumaTotal();
    this.fecha();
  }

  ngOnInit() {
  }

  fecha() {
    let fechaActual = new Date();
    let dia = fechaActual.getDate().toString();
    this.mes = (fechaActual.getMonth() + 1).toString();
    this.anio = fechaActual.getFullYear().toString();
    let hora = fechaActual.getHours().toString();
    let minutos = fechaActual.getMinutes().toString();
    let segundos = fechaActual.getSeconds().toString();
    this.Pfecha = this.anio + "-" + this.mes + "-" + dia;
    this.PHora = hora + ":" + minutos + ":" + segundos;

  }

  enviarDatos(){
    this.productos.forEach(element => {
      this.ps.ventasEstadistica(this.anio,this.mes,element.nombreProducto,element.cantidad).subscribe((data:any) =>{
      console.log(data);
    });

    });
    
  }
  

  sumaTotal(){
    this.productos.forEach(element => {
      this.total = this.total +  Number(element.precio);
      this.cantidad = this.cantidad + 1;

    });
    //console.log(this.total);

  }

  generarComprobante(){
    this.enviarDatos();
    this.router.navigate(['/comprobante']);
  }

}
