import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as db from '../../assets/db.json';
import { DbRequesterService } from './db-requester.service';
import { Voiture } from '../models/ivoiture';
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

// export interface Voiture {
//   id: any;
//   mark: string;
//   annee: string;
//   model: string;
//   chassis: string;
//   prix: number;
//   prixSold: number;
//   matricule: string;
//   color: string;
//   type: string;
//   etat: string;
// }

export interface User {
  id: number;
  login: string;
  pwd: string;
  name: string;
  file: string;
  fileSrc: string;
}

export interface Profile {
  code: string;
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
  profiles = new BehaviorSubject<Profile[]>([]);
  refs = new BehaviorSubject<Object>(null);
  currentUser: string;
  

  getVoitures() {
    return this.voitures.getValue();
  }

  setVoitures(voitures) {
    voitures.forEach(element => {
      element.prixSold = element.prix;
    });
    this.voitures.next(voitures);
  }

  addVoiture(voiture) {
    // voiture["id"] = this.voitures.getValue().length + 1;
    const currentValue = this.voitures.getValue();
    const updatedValue = [...currentValue, voiture];
    this.voitures.next(updatedValue);
  }

  addProfile(profile) {
    const currentValue = this.profiles.getValue();
    const updatedValue = [...currentValue, profile];
    
    this.profiles.next(updatedValue);
    
  }

  addUser(user) {
/*
  const reader = new FileReader();
    // reader.readAsDataURL(file); 
    reader.onload = () => {
      console.log("reader result : ", reader.result);
      this.imageSrc = reader.result as string;
    };
    reader.readAsDataURL(this.form['file']);
*/
    // const reader = new FileReader();

    // reader.readAsDataURL(user.file);
    // user.fileSrc = reader.result;
    // reader.onload = () => {
    //   user.fileSrc = reader.result as string;
    // }
    // reader.readAsDataURL(user.file);


    const currentValue = this.users.getValue();
    const updatedValue = [...currentValue, user];
    console.log(user);
    this.users.next(updatedValue);
  }

  editVoiture(voiture, matricule){
    // const currentValue = this.voitures.getValue();
    // const index = currentValue.indexOf(voiture["id"] -1);
    if(this.getVoitures().find(item => item.matricule === matricule)) {
      this.deleteVoiture(matricule);
      this.addVoiture(voiture);
    }
  }
  
  editUser(user, login) {
    if(this.getUsers().find(item => item.login === login)) {
      this.deleteUser(login);
      this.addUser(user);
    }
    // console.log("Total users: ", this.totalUsers())
  }

  editProfile(profile, code) {
    if(this.getProfiles().find(item => item.code === code)) {
      this.deleteProfile(code);
      this.addProfile(profile);
    }
  }


  deleteProfile(code) {
    const currentValue = this.getProfiles();
    for(const elt of currentValue) {
      if(elt.code === code) {
        currentValue.splice(currentValue.indexOf(elt), 1);
        this.profiles.next(currentValue);
        return;
      }
    }
  }

  deleteUser(login) {
    const currentValue = this.users.getValue();
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
    // console.log("dbcontent :========= ", dbcontent)
    dbcontent.forEach(ref => {
      this.refElems[ref.code] = [];
    });
  }

  setRefElms(refElems) {
    this.refElems = refElems;
  }

  
  getProfiles() {
    return this.profiles.getValue();
  }

  getUsers() {
    // console.log(this.users.getValue())
    return this.users.getValue();
    // console.log(this.users.getValue)
  }

  setProfiles(profiles){
    this.profiles.next(profiles);
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
    // console.log("refs :========= ", refs)
    this.refs.next(refs);
  }

  totalUsers() {
    return this.users.getValue().length;
  }
  

  constructor(private dbRequester: DbRequesterService) { 
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
      this.setVoitures(this.dbRequester.getByKey("voitures"));
      // this.setVoitures(db.voitures);
    }
    
    if(sessionStorage.getItem("profiles")) {
      this.setProfiles(JSON.parse(sessionStorage.getItem("profiles")));
    }
    else {
      this.setProfiles(db.profiles);
    }

    if(sessionStorage.getItem("users")) {
      this.setUsers(JSON.parse(sessionStorage.getItem("users")));
    }
    else {
      this.setUsers(this.dbRequester.getByKey("users"));
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
