import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../../../servicios/productos.service';

@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.css']
})
export class ProductosAdminComponent implements OnInit {

  public productos: any = [];
  constructor(private ps:ProductosService) {
    this.mostrarProductos();
    console.log(this.productos);
  }

  ngOnInit() {
  }

  mostrarProductos(){
    this.ps.getProductos().subscribe((data:any) =>{
      for (const producto of data['results']) {
        this.productos.push(producto);
    }
    });
  }

  guardarProducto(nombre:string,precio:number,descripcion:string){
      this.ps.insertrarProducto(nombre,precio,descripcion).subscribe((data)=>{
        console.log(data);
      });
  }

}

/*

<td>{{producto.ProductoNombre}}</td>
  					<td>{{producto.id}}</td>
  					<td>{{producto.TipoProducto}}</td>


*/