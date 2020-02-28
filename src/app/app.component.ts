import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {

  title = 'proyectoTaller';
  private eContenedor:boolean = true;
  private eNavBar:boolean = true;
  private eMenu:boolean = false;

  constructor(public router:Router){
  }

  ngOnInit(){
  }

  ngAfterContentChecked(){  //Despues de leer la ruta de router-outlet
    //console.log(this.router.url);
    if (this.router.url.indexOf('/menuAdmin') == 0) {
        this.eContenedor = false;
        this.eMenu = true;
        this.eNavBar = false;
    }else{
      this.eNavBar = true;
      this.eMenu = false;
    }

    if (this.router.url == '/login' || this.router.url == '/registro') {
        this.eNavBar = false;
    }
  }
}
