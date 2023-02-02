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

  this.ProductsData.getDataUser().subscribe(userdata =>{
    this.Users = userdata
  })

  this.rutaActiva.paramMap.subscribe(
    
    (paramMap: any) => {
      const{params} = paramMap
  // console.log(params.id)
  this.codigo = params.id

    }
  );
 }



 ngAfterViewChecked(){
  this.DataProduct=this.Products.filter((element: { id: number; }) => element.id == this.codigo)
 }
//



  //VALORES
  Users!:User[];

  Cart=[
    {}
  ]

  cantidad!:number

  UID!:string|undefined

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

  //FUNCION QUE HABRE UN DIALOGO, QUE CAPTA EL VALOR CANTIDAD
  openDialog(): void {
    this.dialog.open(DialogAboutComponent);
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
