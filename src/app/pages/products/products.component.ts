import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/intefaces/storeinterface';
import { User } from 'src/app/intefaces/userinterface';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DatabaseConectService } from 'src/app/Services/database-conect.service';
import { LoginDataService } from 'src/app/Services/login-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {


  //VALORES
  Products!:Store[];
  //

  constructor(
    private ProductsData:DatabaseConectService,
    public dialog: MatDialog,
  ){}

  
  //FUNCION QUE TRAE LA DATA DE FIREBASE
  ngOnInit(): void {
        this.ProductsData.getDataProducts().subscribe(dataproducts => {
          this.Products =dataproducts
        })
  }
  //
 
  //FUNCION QUE HABRE UN DIALOGO, QUE CAPTA EL VALOR "DE PRODUCTO"
  openDialog(Product : Store): void {
    this.dialog.open(DialogProductComponent);
    this.ProductsData.ProductoSeparado= Product

  }
  //

}


//DIALOGO
@Component({
  selector: 'dialog-products-component',
  templateUrl: 'products.dialog.component.html',
})


export class DialogProductComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogProductComponent>,
    private _snackBar: MatSnackBar,
    private datauser:LoginDataService,
    private ProductsData:DatabaseConectService,
    private routes : Router,
  ) {}
    //VALORES

    Users!:User[];
  
    Cart=[
      {}
    ]
  
    UID!:string|undefined
  
    Product:any
    //
  
   //TRAE LA DATA GUARDADA EN UN SERVICIO Y EL ID DE USERDATA
    ngOnInit(){
      this.ProductsData.getDataUser().subscribe(userdata =>{
         this.Users = userdata
       })
       this.Product=this.ProductsData.ProductoSeparado
     }
    //


  //VALOR CANTIDAD

  quantity!:number

  //
  
  //CIERRA EL DIALOGO
  onNoClick(): void {
    this.dialogRef.close();
  }
  //


    //FUNCION QUE AÑADE LA DATA A UNA COLECCION LLAMADA CARRITO 
    anadircart(){
     
      var totalcost:number = (parseFloat(this.Product.cost)*(parseFloat(this.Product.ofert)/100))
 
      this.UID= this.Users[0].id
    
 
      this.Cart.push({Product:this.Product, cantidad:this.quantity , totalcost:totalcost || this.Product.cost})
      
      this.ProductsData.addCart(this.Cart[1],this.UID)
 
      this.routes.navigate(["/Cart"])
 
      this._snackBar.open(`added article!`,`ok`)
 
   }
    //DIALOGO</>
   //

}
