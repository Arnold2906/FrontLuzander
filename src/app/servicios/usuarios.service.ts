import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private servidor ="http://localhost:8000/";

  private  PHP_API_SERVER = this.servidor + 'usuario/login/';
  private  NODEJS_API_GETUSUARIOS = this.servidor + 'usuario';
  private  nodejs_API_SERVER_REGISTRAR = this.servidor + 'usuario/registrar';

  constructor(private http:HttpClient) {

  }

  getusuarios(){
    return this.http.get(this.NODEJS_API_GETUSUARIOS);
  }

  buscarUsuario(correo:string, pass:string){
    return this.http.get(this.PHP_API_SERVER + correo + "/" + pass);
  }

  //

  insertarUsuario(nombre: string, a_paterno: string,
                  a_materno: String, telefono: string,
                  direccion: string, correo: string,
                  pass: string){

                    const usuario = {
                      nombre: nombre,
                      a_paterno: a_paterno,
                      a_materno: a_materno,
                      telefono: telefono,
                      direccion: direccion,
                      email: correo,
                      password: pass
                    };

                    return this.http.post(this.nodejs_API_SERVER_REGISTRAR, usuario);
  }
}
