import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private usuario:any = null;

  constructor(public router:Router) { }

  ngOnInit() {
  }

  abrirlogin(){
    this.router.navigate(['/login']);
  }

  sesionIniciada(){
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario != null) {
        this.usuario = usuario;
        //console.log(this.usuario.nombre);
        return true;
    }else{
      return false;
    }
  }

  cerrarSesion(){
    localStorage.removeItem("usuario");
  }

  mostrarCarrito(){
    this.router.navigate(["/carrito"]);
  }

  mostrarHistorial(){
    this.router.navigate(["/historialCompras"]);
  }

  abrirRegisstro(){
    this.router.navigate(["/registro"]);
  }

}
