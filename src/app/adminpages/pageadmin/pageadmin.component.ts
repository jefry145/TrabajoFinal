import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageadmin',
  templateUrl: './pageadmin.component.html',
  styleUrls: ['./pageadmin.component.scss']
})
export class PageadminComponent {
 constructor(
  private routes:Router
 ){

 }
 //Redirige a una ruta
 ngOnInit(){
  this.routes.navigate(["/Adminpage/dataproduct/productsadmin"])
 }
 //
}
