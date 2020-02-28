import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private servidor = 'http://localhost:8000/';
  private servidor2 = 'http://localhost:8000/';

  private  PHP_API_SERVER = this.servidor + 'productos/listar';
  private  NODEJS_API_BUSCAR_PRODUCTO =  this.servidor + 'productos/';
  private  NODEJS_ESTADISTICA = this.servidor2 + 'estadistica/guardar';

  constructor(private http: HttpClient) {
  }

  getProductos(){
    return this.http.get(this.PHP_API_SERVER);
  }

  buscarProducto(id: string){
    return this.http.get(this.NODEJS_API_BUSCAR_PRODUCTO + id);
  }

  insertrarProducto(nombreP:string,precioP:Number,
    descripcionP:String){

      let producto = {
        ProductoNombre: nombreP,
        ProductoPrecioUnitario: precioP,
        ProductosDescripcion: descripcionP,

      }

      return this.http.post(this.PHP_API_SERVER,producto,
                {
                  headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                  }
                });

              }

    ventasEstadistica(Ventaanio: string, Ventames: string,
      Ventaproducto: String, Ventatotal: String){
            
                    const venta = {
                      anio: Ventaanio,
                      mes: Ventames,
                      producto: Ventaproducto,
                      total: Ventatotal
                      };

                      console.log("LA PINCHE VENTA ES : ",venta);
            
                  return this.http.post(this.NODEJS_ESTADISTICA, venta);
            
                          }
}
