import { Component } from '@angular/core';

import { DatabaseConectService } from 'src/app/Services/database-conect.service';


@Component({
  selector: 'app-login-user-data',
  templateUrl: './login-user-data.component.html',
  styleUrls: ['./login-user-data.component.scss']
})
export class LoginUserDataComponent {
  

  ngOnInit(): void {


  }
  
  constructor(
    private userdata:DatabaseConectService,
    
  ){}
    
}
