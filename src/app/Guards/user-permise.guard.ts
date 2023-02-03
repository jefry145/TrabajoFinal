import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DatabaseConectService } from '../Services/database-conect.service';
import { LoginDataService } from '../Services/login-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserPermiseGuard implements CanActivate {
  constructor(
    private dataUser:LoginDataService
    
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //Verifica el estado de inicio de sesion
          location.reload()
        return true;

      //

  }
  
}
