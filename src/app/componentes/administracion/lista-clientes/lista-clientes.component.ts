import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../../servicios/usuarios.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  public usuarios:any = [];

  constructor(private us:UsuariosService) {

    this.mostrarUsuarios();
    //console.log(this.usuarios);

  }

  ngOnInit() {
  }

  mostrarUsuarios(){
    this.us.getusuarios().subscribe((data:any) => { 

    for (let usuario of data['results'])  {
          console.log(usuario);
          this.usuarios.push(usuario);
         
      }
    });
  }

}
