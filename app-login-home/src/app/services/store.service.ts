import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as db from '../../assets/db.json';

// class RefObject {
//   code: string;
//   lib: string;
//   rows: Array<{lib: string, code: string}>;
//   constructor(lib, code, rows) {
//     this.code = code;
//     this.lib = lib;
//     this.rows = rows;
//   }
// }

export interface Voiture {
  id: any;
  mark: string;
  annee: string;
  model: string;
  chassis: string;
  prix: string;
  matricule: string;
  color: string;
  type: string;
  etat: string;
}

export interface User {
  id: number;
  login: string;
  pwd: string;
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  

  // refData = {
  //   "code": "",
  //   "lib" : "",
  //   "rows": ""
  // }
  voitures = new BehaviorSubject<Voiture[]>([]);

  refElems = {};
  users = new BehaviorSubject<User[]>([]);
  refs = new BehaviorSubject<Object>(null);
  currentUser: string;
  

  getVoitures() {
    return this.voitures.getValue();
  }

  setVoitures(voitures) {
    this.voitures.next(voitures);
  }

  addVoiture(voiture) {
    // voiture["id"] = this.voitures.getValue().length + 1;
    const currentValue = this.getVoitures();
    const updatedValue = [...currentValue, voiture];
    this.setVoitures(updatedValue);
  }

  addUser(user) {
    const currentValue = this.users.getValue();
    const updatedValue = [...currentValue, user];
    console.log("adding this user : ", user);
    this.users.next(updatedValue);
  }

  editVoiture(voiture){
    // const currentValue = this.voitures.getValue();
    // const index = currentValue.indexOf(voiture["id"] -1);
    if(this.getVoitures().find(item => item.matricule === voiture.matricule)) {
      this.deleteVoiture(voiture.matricule);
      const updatedValue = [...this.voitures.getValue(), voiture];
      this.voitures.next(updatedValue);
    }
  }
  
  editUser(user, login) {
    if(this.getUsers().find(item => item.login === login)) {
      this.deleteUser(login);
      this.addUser(user);
    }
    console.log("Total users: ", this.totalUsers())
  }

  deleteUser(login) {
    const currentValue = this.getUsers();
    for(const elt of currentValue) {
      if(elt.login === login) {
        currentValue.splice(currentValue.indexOf(elt), 1);
        this.users.next(currentValue);
        return;
      }
    }
  }

  deleteVoiture(matricule) {
    const currentValue = this.voitures.getValue();
    for(const elt of currentValue) {
      if(elt.matricule === matricule) {
        currentValue.splice(currentValue.indexOf(elt), 1);
        this.voitures.next(currentValue);
        return;
      }
    }
  }
  

  getRefElms() {
    return this.refElems;
  }

  initRefElms(dbcontent) {
    console.log("dbcontent :========= ", dbcontent)
    dbcontent.forEach(ref => {
      this.refElems[ref.code] = [];
    });
  }

  setRefElms(refElems) {
    this.refElems = refElems;
  }

  

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
    console.log("refs :========= ", refs)
    this.refs.next(refs);
  }

  totalUsers() {
    return this.users.getValue().length;
  }
  

  constructor() { 
    this.setRefs(db.refs);
    this.initRefElms(this.refs.getValue());
    // this.setVoitures(db.voitures);
    if(sessionStorage.getItem("refElems")){
      this.setRefElms(JSON.parse(sessionStorage.getItem("refElems")));
    }
    if(sessionStorage.getItem("voitures")){
      this.setVoitures(JSON.parse(sessionStorage.getItem("voitures")));
    }
    else {
      this.setVoitures(db.voitures);
    }
    if(sessionStorage.getItem("users")) {
      this.setUsers(JSON.parse(sessionStorage.getItem("users")));
    }
    else {
      this.setUsers(db.users);
    }
  }
}




  

  // setRefsData(refs) {
  //   for(let ref of refs) {
  //     this.refsData.setValue(ref.code, []);
  //   }
  // }

  // getRefsDataByKey(row) {
  //   for(let ref of this.refsData) {
  //     if((ref.lib === row.lib) && (ref.code === row.code)) {
  //       return ref;
  //     }
  //   }
  //   return null;
  // }
  
  // getRefsData() {
  //   return JSON.stringify(this.refsData);
  // }

  // getRefsDataIndexByKey(key) : number {
  //   for(let i=0; i< this.refsData.length; i++) {
  //     if((this.refsData[i].lib === key.lib) && (this.refsData[i].code === key.code)) {
  //       return i;
  //     }
  //   }
  //   return -1;
  // }
  
  // setRefsDataInitialize(refs) {
  //   for(let ref of refs) {
  //     this.refsData.push(new RefObject(ref.code, ref.lib, []));
  //   }
  // }

  // setRefsData(refsData){
  //   // for(let row of refsData){
  //   //   this.refsData.push(new RefObject(row.code, row.lib, row.rows));
  //   // }
  //   console.log(refsData);
  // }
