import { Component } from '@angular/core';
import { user } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/intefaces/userinterface';
import { DatabaseConectService } from 'src/app/Services/database-conect.service';
import { LoginDataService } from 'src/app/Services/login-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  UserData!:User[]
  ValidUser!:any
  constructor(
    private formBuilder : FormBuilder,
    private UserService : LoginDataService,
    private DatabaseService : DatabaseConectService,
    private routes : Router,
    private _snackBar: MatSnackBar,
  ){}


  public formLogin!: FormGroup;

  //TRAE LA DATA DE USUARIO PARA INICIALIZARLA
  ngOnInit() {
    
    this.DatabaseService.getDataUser().subscribe(data=>{
      this.UserData = data
    })
    this.DatabaseService.getUserValid().subscribe(valid =>{
      this.ValidUser = valid
   
    })
    
//

//FORMULARIO Y VALIDACION DE DATOS
    this.formLogin = this.formBuilder.group({
      email: ["", [Validators.required, Validators.minLength(3), Validators.email , Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9_]+(\\.[c][o][m]+)+")]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
  
//

ngAfterViewChecked(){
 

}

//FUNCION QUE INICIA LA SESION DEL USUARIO Y GUARDA UNA COPIA EN LA BASE DE DATOS

  login(){
  
    this.UserService.login(this.formLogin.value)
    .then(response => {
          if(this.formLogin.value.email === "master@gmail.com" && this.formLogin.value.password === "123456"){
  
            var user=({validacionUser:true , ValidacionMaster:true})
            this.DatabaseService.addValidUser(user)
            
          }else{
            
            var user=({validacionUser:true , ValidacionMaster:false})
            this.DatabaseService.addValidUser(user)
          }
          this.DatabaseService.addUser(this.formLogin.value)

          this.routes.navigate(["/Home/products"])

          this._snackBar.open(`Welcome ${this.formLogin.value.email}`, `ok`)
         
     
     console.log(response)
      
    })
    .catch(error => console.log(error));
  }
  //
}
