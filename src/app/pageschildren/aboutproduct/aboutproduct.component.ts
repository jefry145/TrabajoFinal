import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/intefaces/storeinterface';
import { User } from 'src/app/intefaces/userinterface';
import { DatabaseConectService } from 'src/app/Services/database-conect.service';
import { LoginDataService } from 'src/app/Services/login-data.service';

@Component({
  selector: 'app-aboutproduct',
  templateUrl: './aboutproduct.component.html',
  styleUrls: ['./aboutproduct.component.scss']
})
export class AboutproductComponent {

 constructor(
  private ProductsData:DatabaseConectService,
  private rutaActiva: ActivatedRoute,
  public dialog: MatDialog,
  private userdata: LoginDataService,
  private routes : Router,
  private _snackBar: MatSnackBar,
 ){ }

 codigo:any;
  DataProduct:any;
  Products!:any[];
  

  //FUNCION QUE LEE EL ID DEL OBJETO Y TRAE EL ARRAY CON UN FILTRO
 ngOnInit(){

  this.ProductsData.getDataProducts().subscribe(dataproducts => {
    this.Products =dataproducts
  })

  this.rutaActiva.paramMap.subscribe(
    
    (paramMap: any) => {
      const{params} = paramMap
  this.codigo = params.id

    }
  );
 }
//


//TRAE EL ARRAY FILTRADO
 ngAfterViewChecked(){
  this.DataProduct=this.Products.filter((element: { id: number; }) => element.id == this.codigo)
 }
//

  //FUNCION QUE HABRE UN DIALOGO, QUE CAPTA EL VALOR "DE PRODUCTO"
  openDialog(Product : Store): void {
    this.dialog.open(DialogAboutComponent);
    this.ProductsData.ProductoSeparado= Product

  }
  //

}

//DIALOGO
@Component({
  selector: 'dialog-about-component',
  templateUrl: 'about.dialog.component.html',
})
export class DialogAboutComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogAboutComponent>,
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
