import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DatabaseConectService } from 'src/app/Services/database-conect.service';


@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss']
})
export class ProductManageComponent {

  
    constructor(
      private ProductsData:DatabaseConectService,
      private formBuilder: FormBuilder,
      private routes:Router,
      private _snackBar: MatSnackBar,
    ){}
  
    //VALIDACION Y FORMULARIO DE REGISTRO DE PRODUCTO
    public formLogin!: FormGroup;
  
    ngOnInit(): void {
             this.routes.navigate(["/Adminpage/dataproduct/productsadmin"])
      
             this.formLogin = this.formBuilder.group({
        
              product: ["", [Validators.required]],
       
              cost: ["", [Validators.required]],

              ofert:[],

              description:["", [Validators.required]],

              img:["", [Validators.required]],
      
            });
    }
  //</>

  //Envia el producto a la base de datos
  onSubmit(){
      this.ProductsData.addProduct(this.formLogin.value)
      this._snackBar.open(`Added product!`,`ok`)
  }
  //
}
