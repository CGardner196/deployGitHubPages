import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SessionStorage } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  users = new BehaviorSubject<Object>(null);

  public get getUsers() {
    return this.users.getValue();
  }

  public set setUsers(users) {
    this.users.next(users);
  }
  
  constructor() { 
    if(SessionStorage("users")) {
      this.users.next(SessionStorage("users"));
    }
  }
}
