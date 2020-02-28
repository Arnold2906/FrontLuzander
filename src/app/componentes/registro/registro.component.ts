import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
        public nombre: string;
        public a_paterno: string;
        public a_materno: string;
        public telefono: string;
        public direccion: string;
        public correo: string;
        public pass: string;
        public rep_pass: string;

  constructor(private us: UsuariosService) { 
    
  }
  
  ngOnInit() {
  }

  holamundo(){
    console.log('Hola mundo desde registrar');
  }

  registrarUsuario(nombre:string,a_paterno:string,
                  a_materno:String,telefono:string,
                  direccion:string,correo:string,
                  pass:string,rep_pass:string){
                    
                    console.log("El nombre es", this.nombre+"-"+this.a_paterno);
                    this.us.insertarUsuario(this.nombre,this.a_paterno,this.a_materno,this.telefono,this.direccion,this.correo,this.pass).subscribe((data:any) =>{
                      console.log(data);
                    });

  }

}
