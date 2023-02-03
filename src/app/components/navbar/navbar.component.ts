import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { loadBundle } from '@firebase/firestore';
import { DatabaseConectService } from 'src/app/Services/database-conect.service';
import { LoginDataService } from 'src/app/Services/login-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  validmaster!:boolean
  valid!:boolean
  validLogin:boolean=true
  faultLogin:boolean=false
  UserID:any
  ValidUser!:any

  constructor(
    private UserService:LoginDataService,
    private DataService:DatabaseConectService,
    private routes : Router,
    private _snackBar: MatSnackBar,
  ){ }

  //Trae la data de usuario y escoje el ID
  ngOnInit(){
    this.DataService.getDataUser().subscribe(datauser=>{
      this.UserID=datauser
      console.log(this.UserID[0].id)
    })
    this.DataService.getUserValid().subscribe(valid =>{
      this.ValidUser = valid})
  }
  //

  //Verifica si se ah iniciado sesion para mostrar las rutas
  ngAfterViewChecked(){
    this.valid=this.UserService.validacionLogin
    this.validmaster=this.UserService.validacionMaster
   
    if(this.valid === true){
        this.validLogin= false
        this.faultLogin=true
    }
  }
  //


  //Funcion que cierra la sesion del usuario
  logout(){
    this.UserService.logout()
    this.DataService.deletedValid(this.ValidUser[0].id)
    this.DataService.deletedCart(this.UserID[0].id)
    this.UserService.validacionLogin=false
    this.validLogin= true
    this.UserService.validacionMaster=false
    this.faultLogin=false
    this.routes.navigate(["/Login"])
   
    this._snackBar.open(`Se you later!`,`òk`)
  }
  //
}
