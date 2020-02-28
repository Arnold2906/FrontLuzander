import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      $('.galeria .contenedor-imagen').on('click', function(){
        $('#modal').modal;
        var ruta_imagen = ($(this).find('img').attr('src'));
        $('#imagen-modal').attr('src', ruta_imagen);
      });

      $('#modal').on('click', function(){
        //$('#modal').modal('hide');
      });
    })
  }


}
