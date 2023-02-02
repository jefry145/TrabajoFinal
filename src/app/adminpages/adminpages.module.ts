import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserDataComponent } from './Pages/login-user-data/login-user-data.component';
import { ProductManageComponent } from './Pages/product-manage/product-manage.component';
import { PageadminComponent } from './pageadmin/pageadmin.component';
import { ProductstheadminComponent } from './Pages/productstheadmin/productstheadmin.component';
import { AppRoutingModule } from '../app.routing.module';
import { AppMaterial } from '../angular.material.module';



@NgModule({
  declarations: [
    LoginUserDataComponent,
    ProductManageComponent,
    PageadminComponent,
    ProductstheadminComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterial
  ]
})
export class AdminpagesModule { }
