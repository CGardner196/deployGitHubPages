import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  users = new BehaviorSubject<Object>(null);
  currentUser: string;

  getUsers() {
    // console.log(this.users.getValue())
    return this.users.getValue();
    // console.log(this.users.getValue)
  }

  setUsers(users) {
    this.users.next(users);
  }
  
  constructor() { 
    if(sessionStorage.getItem("users")) {
      this.users.next(sessionStorage.getItem("users"));
    }
  }
}
