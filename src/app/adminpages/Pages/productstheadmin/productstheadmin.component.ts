import { Component } from '@angular/core';
import { Store } from 'src/app/intefaces/storeinterface';

import { DatabaseConectService } from 'src/app/Services/database-conect.service';

@Component({
  selector: 'app-productstheadmin',
  templateUrl: './productstheadmin.component.html',
  styleUrls: ['./productstheadmin.component.scss']
})
export class ProductstheadminComponent {
     Products!:Store[];

  
    constructor(
      private ProductsData:DatabaseConectService,
    ){}

  //Lee el producto de la base de datos
    ngOnInit(): void {
          this.ProductsData.getDataProducts().subscribe(dataproducts => {
            this.Products =dataproducts
          })
    }

  //

  //Funcion que elimina un producto de la base de datos
    Delete(Product : Store){
          this.ProductsData.deletedProduct(Product)
    }
   
  //
  
   //TABLA DE CONTENIDO
   displayedColumns: string[] = [ 'id','product', 'cost','ofert','description' , 'image' , 'delete'];
   dataSource = this.Products;
   //</>
}
