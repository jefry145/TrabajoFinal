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

  Users!:User[];

  Cart=[
    {}
  ]

  cantidad!:number

  UID!:string|undefined

  //

  constructor(
    private ProductsData:DatabaseConectService,
    private routes : Router,
    public dialog: MatDialog,
    private userdata: LoginDataService,
    private _snackBar: MatSnackBar,
  ){}

  
  //FUNCION QUE TRAE LA DATA DE FIREBASE
  ngOnInit(): void {
        this.ProductsData.getDataProducts().subscribe(dataproducts => {
          this.Products =dataproducts
        })
        this.ProductsData.getDataUser().subscribe(userdata =>{
          this.Users = userdata
        })

  }
  //
 

  //FUNCION QUE AÑADE LA DATA A UNA COLECCION LLAMADA CARRITO 
  anadircart(Product : Store){


     this.UID= this.Users[0].id
   

     this.Cart.push({Product, cantidad:this.userdata.Cantidad})
     
     this.ProductsData.addCart(this.Cart[1],this.UID)

     this.routes.navigate(["/Cart"])

     this._snackBar.open(`added article!`,`ok`)

  }
  //

  //FUNCION QUE HABRE UN DIALOGO, QUE CAPTA EL VALOR "CANTIDAD"
  openDialog(): void {
    this.dialog.open(DialogProductComponent);
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
    private datauser:LoginDataService
  ) {}

  //VALORES

  quantity!:number

  //
  
  //CIERRA EL DIALOGO
  onNoClick(): void {
    this.dialogRef.close();
  }
  //

  //PLASMA EL VALOR EN LA DATA DE SERVICIO
  async onSubmit(){
    this.datauser.Cantidad=this.quantity
    this._snackBar.open(`Click in add cart!`,"ok");
  }
  //

  //DIALOGO</>

}
