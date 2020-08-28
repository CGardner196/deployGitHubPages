import { Injectable } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  users;

  constructor(private store: StoreService, private router: Router) {
    this.users = this.store.getUsers()
   }

  logIn(user) {
    console.log("user in auth Service login Method :: ---- :: ", user);
    console.log(this.users);
    if(!this.users.find(item => item.pwd === user.pwd)) { return false;} 
    else {
      this.store.currentUser = user.login;
      return true;
    }
    
    // if(!this.users.find(item => item.pwd === user.pwd)) {
    //   console.log(this.users)
    //   // console.log(this.users.indexOf(user));
    //   console.log(user)
    //   console.log("user not found");

    //   this.router.navigate(['/login']);
    // } 
    // else {
    //   this.router.navigate(['/home']);
    // }
  }

  logOut() {
    this.store.currentUser = null;
    sessionStorage.removeItem("currentUser");
    this.router.navigate(['/login']);
  }
}
