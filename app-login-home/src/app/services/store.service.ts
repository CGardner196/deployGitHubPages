import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Collections from 'typescript-collections';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // refData = {
  //   "code": "",
  //   "lib" : "",
  //   "rows": ""
  // }

  refsData = new Collections.Dictionary<string, []>();

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


  setRefsData(refs) {
    for(let ref of refs) {
      this.refsData.setValue(ref.code, []);
    }
  }

  getRefsDataByKey(key) {
    return this.refsData.getValue(key);
  }
  
  getRefsData() {
    return this.refsData.toString();
  }

  constructor() { 
    if(sessionStorage.getItem("users")) {
      this.users.next(sessionStorage.getItem("users"));
    }
    if(sessionStorage.getItem("refs")) {
      this.refs.next(sessionStorage.getItem("refs"));
    }
    if(sessionStorage.getItem("refsData")){
      console.log("in store: ", sessionStorage.getItem("refsData"))
      this.refsData = JSON.parse(sessionStorage.getItem("refsData"));
    }
  }
}
