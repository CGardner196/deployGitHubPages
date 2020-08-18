import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreService } from './store.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private store: StoreService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.store.currentUser) {
      return true;
    } else { 
      return this.router.navigate(['login']);
    }
  }
}
