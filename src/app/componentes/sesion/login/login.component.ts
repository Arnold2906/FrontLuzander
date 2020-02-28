import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosService} from '../../../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private correo: string = "";
  private password: string = "";
  private usuario: any = [];

  constructor(public router:Router,
              private us:UsuariosService) {
  }

  ngOnInit(){

  }

  iniciarSesion(correo: string, pass: string) {
    this.us.buscarUsuario(correo, pass).subscribe((data) => {
      this.usuario = data['results'];

      const usuarioV = {
        correo: this.usuario[0][0].correo,
        id : this.usuario[0][0].id,
        nombre: this.usuario[0][0].nombre,
        a_paterno: this.usuario[0][0].a_paterno,
        a_materno: this.usuario[0][0].amaterno,
        cargo: this.usuario[0][0].cargo
      };
      console.log('la variable usuario',usuarioV);
      localStorage.setItem('usuario',JSON.stringify(usuarioV));

      // tslint:disable-next-line: triple-equals
      if (usuarioV.cargo == 'Admin') {
          this.router.navigate(['/menuAdmin/productos']);
      } else {
        this.router.navigate(['/inicio']);
      }
    });
  }

}
