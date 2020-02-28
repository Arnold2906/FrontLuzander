import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public productos: any[];
  public total: number = 0;
  public cantidad: number = 0;

  constructor(public router:Router) {
    this.productos = JSON.parse(localStorage.getItem("carrito"));
    //console.log(this.productos);
    this.sumaTotal();
  }

  ngOnInit() {
  }

  sumaTotal(){
    this.productos.forEach(element => {

      this.total = this.total +  Number(element.precio);
      this.cantidad = this.cantidad + 1;

    });
    //console.log(this.total);

  }

  mostrarProductos(){
    this.router.navigate(['/productos']);
  }

  eliminarProducto(index:any){

    if (index > -1) {
        this.productos.splice(index,1);
    }

    localStorage.setItem('carrito',JSON.stringify(this.productos));

    this.total = 0;
    this.cantidad = 0;
    this.sumaTotal();
  }

  pagarOnline(){
    this.router.navigate(['/pago']);
  }

}
