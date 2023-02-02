import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { BreakingpageComponent } from './components/breakingpage/breakingpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppMaterial } from './angular.material.module';
import { PagesModule } from './pages/pages.module';
import { PageschildrenModule } from './pageschildren/pageschildren.module';
import { AdminpagesModule } from './adminpages/adminpages.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BreakingpageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterial,
    PagesModule,
    PageschildrenModule,
    AdminpagesModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
