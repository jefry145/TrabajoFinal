import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseConectService } from 'src/app/Services/database-conect.service';
import { LoginDataService } from 'src/app/Services/login-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private routes : Router,
    public databaseidlogin: LoginDataService,
   
    ){}
    
  Users:any
  contador:any

  //Funcion que lleva a una ruta en el inicio
  ngOnInit(){
     this.routes.navigate(["/Home/products"])

  }
  //

}
