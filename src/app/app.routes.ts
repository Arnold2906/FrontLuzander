import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { AyudaComponent } from './componentes/ayuda/ayuda.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/sesion/login/login.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { HistorialComprasComponent } from './componentes/historial-compras/historial-compras.component';
import { ProductosAdminComponent } from './componentes/administracion/productos-admin/productos-admin.component';
import { OrdenesVentaComponent } from './componentes/administracion/ordenes-venta/ordenes-venta.component';
import { ListaClientesComponent } from './componentes/administracion/lista-clientes/lista-clientes.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { ComprobantePagoComponent } from './componentes/comprobante-pago/comprobante-pago.component';

const app_routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent},
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'ayuda', component: AyudaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'producto/:id/:ret', component: ProductoComponent},
  { path: 'historialCompras', component: HistorialComprasComponent},
  { path: 'menuAdmin/productos', component: ProductosAdminComponent},
  { path: 'menuAdmin/ventas', component: OrdenesVentaComponent},
  { path: 'menuAdmin/clientes', component: ListaClientesComponent},
  { path: 'pago', component: PagoComponent},
  { path: 'comprobante', component: ComprobantePagoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }

];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
