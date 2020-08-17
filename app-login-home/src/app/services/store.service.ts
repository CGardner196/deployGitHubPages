import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  users = new BehaviorSubject<Object>(null);
  refs = new BehaviorSubject<Object>(null);
  currentUser: string;

  getUsers() {
    // console.log(this.users.getValue())
    return this.users.getValue();
    // console.log(this.users.getValue)
  }

  setUsers(users) {
    this.users.next(users);
  }

  getRefs() {
    // console.log(this.users.getValue())
    return this.refs.getValue();
    // console.log(this.users.getValue)
  }

  setRefs(refs) {
    this.refs.next(refs);
  }

  
  constructor() { 
    if(sessionStorage.getItem("users")) {
      this.users.next(sessionStorage.getItem("users"));
    }
    if(sessionStorage.getItem("refs")) {
      this.refs.next(sessionStorage.getItem("refs"));
    }
  }
}
