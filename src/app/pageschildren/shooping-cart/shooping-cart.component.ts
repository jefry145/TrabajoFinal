import { Component } from '@angular/core';
import { zipAll } from 'rxjs';
import { DatabaseConectService } from 'src/app/Services/database-conect.service';

@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.scss']
})
export class ShoopingCartComponent {

  
  data!:any
  Users!:any

  UID!:string|undefined
  
  totalcost:number=0

  total!:number

constructor(
  private ProductsData:DatabaseConectService,
){

}
//TRAE LA DATA DEL CARRITO
  ngOnInit(){
    this.ProductsData.getDataUser().subscribe(userdata =>{
      this.Users = userdata
   
        this.UID= this.Users[0].id
     
      
    
    this.ProductsData.getDataCart(this.UID).subscribe(data =>{
      this.data =data


      for (let i = 0; i < data.length; i++) {
    
        this.totalcost += this.data[i].totalcost * parseFloat(this.data[i].cantidad)
        this.total= this.totalcost 
      }
      
    })
    })
  
  }
  //

 
//TABLA
  displayedColumns: string[] = [ 'id','product', 'cost','ofert' , 'Quantity', 'image' , 'TotalCost'];
  dataSource = this.data;
  //
}
