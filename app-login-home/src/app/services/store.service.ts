import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Collections from 'typescript-collections';
import { faTintSlash } from '@fortawesome/free-solid-svg-icons';
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


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // refData = {
  //   "code": "",
  //   "lib" : "",
  //   "rows": ""
  // }

  // refsData = new Collections.Dictionary<string, []>();
  // refsData = new Array<RefObject>();
  refElems = {};

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

  users = new BehaviorSubject<Object>(null);
  refs = new BehaviorSubject<Object>(null);
  voitures = new BehaviorSubject<Object>(null);
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
    console.log("refs :========= ", refs)
    this.refs.next(refs);
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


  setVoitures(voitures) {
    this.voitures.next(voitures);
  }

  getVoitures() {
    return this.voitures.getValue();
  }

  constructor() { 
    this.setRefs(db.refs);
    this.initRefElms(this.refs.getValue());
    this.setUsers(db.users);
    this.setVoitures(db.voitures);
    if(sessionStorage.getItem("refElems")){
      this.setRefElms(JSON.parse(sessionStorage.getItem("refElems")));
    }
    if(sessionStorage.getItem("voitures")){
      this.setVoitures(sessionStorage.getItem("voitures"));
    }
  }
}
