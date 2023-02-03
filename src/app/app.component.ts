import { Component } from '@angular/core';
import { DatabaseConectService } from './Services/database-conect.service';
import { LoginDataService } from './Services/login-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'actividadFinal';
  constructor(
    private datauservalid:DatabaseConectService,
    private loginvalid : LoginDataService
  ){

  }
  ValidUser!:any
  ngOnInit(){
    this.datauservalid.getUserValid().subscribe(valid =>{
      this.ValidUser = valid
      console.log(this.ValidUser)
      this.loginvalid.Valid(this.ValidUser[0].validacionUser , this.ValidUser[0].ValidacionMaster)
      
    })
  }
}
