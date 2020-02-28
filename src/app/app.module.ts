import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

//Rutas
import {APP_ROUTING} from './app.routes';
import { AyudaComponent } from './componentes/ayuda/ayuda.component';
import { LoginComponent } from './componentes/sesion/login/login.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { HistorialComprasComponent } from './componentes/historial-compras/historial-compras.component';
import { MenuComponent } from './componentes/administracion/menu/menu.component';
import { ProductosAdminComponent } from './componentes/administracion/productos-admin/productos-admin.component';
import { OrdenesVentaComponent } from './componentes/administracion/ordenes-venta/ordenes-venta.component';
import { ListaClientesComponent } from './componentes/administracion/lista-clientes/lista-clientes.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { ComprobantePagoComponent } from './componentes/comprobante-pago/comprobante-pago.component';

//Angular Material

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    NosotrosComponent,
    ProductosComponent,
    ContactoComponent,
    AyudaComponent,
    LoginComponent,
    CarritoComponent,
    RegistroComponent,
    ProductoComponent,
    HistorialComprasComponent,
    MenuComponent,
    ProductosAdminComponent,
    OrdenesVentaComponent,
    ListaClientesComponent,
    PagoComponent,
    ComprobantePagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
