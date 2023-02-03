import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { DatabaseConectService } from './database-conect.service';


@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
validacionLogin!:boolean
validacionMaster!:boolean


  constructor(
    private auth:Auth,
    private datauservalid:DatabaseConectService,
    
  ) { }
 
  ngOnInit(){
    
  }
//REGISTRO DE USUARIO A NUESTRO LOGIN DATA EN EL FIREBASE
  registerUser({email,password}:any){
    //console.log(email)

   return createUserWithEmailAndPassword(this.auth,email,password)
}
//</>

//LOGUEO DE USUARIO ; VERIFICANDO SI ESTA EN LA BASE DE DATOS
login({email,password}:any){
  return signInWithEmailAndPassword(this.auth,email,password)
}
//</>

//FUNCION QUE VERIFICA LOS VALORES SEGUN EL TIPO DE USUARIO LOGEADO
Valid(validacion:boolean , validacionmaster:boolean){
  this.validacionLogin = validacion 
  this.validacionMaster= validacionmaster 

}
//


//FUNCION QUE CIERRA LA SESION DEL USUARIO EN UTILIZACION
logout(){
  return signOut(this.auth)
}
//</>
}
