import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private servidor = 'http://localhost:8000/';

  private  NODEJS_ESTADISTICA = this.servidor + 'estadistica/guardar';

  constructor(private http: HttpClient) {
  }

  ventasEstadistica(anio: string, mes: Number,
    producto: String, total: String){

        const venta = {
            Ventaanio: anio,
            Ventames: mes,
            Ventaproducto: producto,
            Ventatotal: total
          };

      return this.http.post(this.NODEJS_ESTADISTICA, venta);

              }
}