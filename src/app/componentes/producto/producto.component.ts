import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ProductosService} from '../../servicios/productos.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public producto: any = [];
  public alerta: boolean = false;
  public urlProductoImage: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private ps: ProductosService) {
              this.mostrarProducto(this.route.snapshot.paramMap.get('id'));

  }

  ngOnInit() {
  }

  mostrarProducto(id: string) {
    let numer = +id;
    this.urlProductoImage = 'assets/img/p' + (numer) + '.jpg';
    this.ps.buscarProducto(id).subscribe((data) =>{
      this.producto = data['results'];
    });
  }

  regresar() {
    this.router.navigate([this.route.snapshot.paramMap.get('ret')]);
  }
  comprar() {
    let producto = {
      id: this.producto[0][0].id,
      nombreProducto: this.producto[0][0].ProductoNombre,
      precio: this.producto[0][0].PrecioProducto,
      cantidad: 1
    }
    let carrito = [];
    if (JSON.parse(localStorage.getItem("carrito")) != null) {
      carrito = JSON.parse(localStorage.getItem("carrito"));
      carrito.push(producto);
      localStorage.setItem("carrito",JSON.stringify(carrito));
  }else{
    carrito.push(producto);
    localStorage.setItem("carrito",JSON.stringify(carrito));
  }
    this.router.navigate(["/carrito"]);
  }

  llenarCarrito(){
    let producto = {
      id: this.producto[0][0].id,
      nombreProducto: this.producto[0][0].ProductoNombre,
      precio: this.producto[0][0].PrecioProducto,
      cantidad: 1
    }
    let carrito = [];
    if (JSON.parse(localStorage.getItem("carrito")) != null) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        carrito.push(producto);
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }else{
      carrito.push(producto);
      localStorage.setItem("carrito",JSON.stringify(carrito));
    }

    this.alerta = true;
    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove();
        });
        this.alerta = false;
    }, 1000);

    
    //localStorage.removeItem("carrito");
  }


}
