import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';



import { PageadminComponent } from "./adminpages/pageadmin/pageadmin.component";
import { LoginUserDataComponent } from "./adminpages/Pages/login-user-data/login-user-data.component";
import { ProductManageComponent } from "./adminpages/Pages/product-manage/product-manage.component";
import { ProductstheadminComponent } from "./adminpages/Pages/productstheadmin/productstheadmin.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProductsComponent } from "./pages/products/products.component";
import { LoginComponent } from "./pageschildren/login/login.component";
import { RegisterComponent } from "./pageschildren/register/register.component";
import { ShoopingCartComponent } from "./pageschildren/shooping-cart/shooping-cart.component";
import { AboutproductComponent } from "./pageschildren/aboutproduct/aboutproduct.component";
import { BreakingpageComponent } from "./components/breakingpage/breakingpage.component";


const routes:Routes=[
    {path : "Adminpage" , component : PageadminComponent,  ...canActivate(()=> redirectUnauthorizedTo(["/Login"])),
      children:[
        {path : "datauser" , component : LoginUserDataComponent , ...canActivate(()=> redirectUnauthorizedTo(["/Home/products"]))},
        {path : "dataproduct" , component : ProductManageComponent , ...canActivate(()=> redirectUnauthorizedTo(["/Home/products"])),
         children:[
            {path : "productsadmin" , component : ProductstheadminComponent , ...canActivate(()=> redirectUnauthorizedTo(["/Home/products"]))}
         ]}
      ]
    },

    {path : "Home" , component : HomeComponent ,
      children:[
        {path: "products" , component : ProductsComponent }
      ]},

    {path: "Products" , component : ProductsComponent },

    {path: "DetailsProduct/:id",component : AboutproductComponent},

    {path: "Cart" , component : ShoopingCartComponent , ...canActivate(()=> redirectUnauthorizedTo(["/Login"]))},

    {path: "Login" , component : LoginComponent},
    
    {path : "Register" , component : RegisterComponent},

    {path : "" , pathMatch:"full" , redirectTo:"/Home/products"},

    {path:'404', component: BreakingpageComponent },
  {path:'**', redirectTo:'404', pathMatch:'full'},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}