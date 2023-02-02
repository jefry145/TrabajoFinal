import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutproductComponent, DialogAboutComponent } from './aboutproduct/aboutproduct.component';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppMaterial } from '../angular.material.module';
import { AppRoutingModule } from '../app.routing.module';




@NgModule({
  declarations: [

     AboutproductComponent,
     ShoopingCartComponent,
     LoginComponent,
     RegisterComponent,
     DialogAboutComponent
  ],
  imports: [
    CommonModule,
    AppMaterial,
    AppRoutingModule
  ]
})
export class PageschildrenModule { }
