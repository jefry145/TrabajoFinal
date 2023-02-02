import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDataService } from 'src/app/Services/login-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  //vista del password
  hide = true;
  //</>
  
    constructor(
      private userdata:LoginDataService,
      private formBuilder: FormBuilder,
      private routes : Router,
    ){}
  
    //VALIDACION Y FORMULARIO DE REGISTRO DE USUARIO
    public formLogin!: FormGroup;
  
    ngOnInit(): void {
      this.formLogin = this.formBuilder.group({
        email: ["", [Validators.required, Validators.minLength(3), Validators.email , Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9_]+(\\.[c][o][m]+)+")]],
        password: ["", [Validators.required, Validators.minLength(6)]],
      });
    }
  //</>
  
   //REGISTRO DE USUARIO EN LA BASE DE DATOS FIREBASE
    onSubmit(){
      this.userdata.registerUser(this.formLogin.value)
      .then(response => {
        
        this.routes.navigate(["/Login"])
      console.log(response)
    
    })
    .catch(error => console.log(error));
   }
  //
}
