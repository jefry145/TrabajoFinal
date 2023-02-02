import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DialogProductComponent, ProductsComponent } from './products/products.component';
import { AppMaterial } from '../angular.material.module';
import { AppRoutingModule } from '../app.routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    DialogProductComponent
  ],
  imports: [
    CommonModule,
    AppMaterial,
    AppRoutingModule,
  ]
})
export class PagesModule { }
