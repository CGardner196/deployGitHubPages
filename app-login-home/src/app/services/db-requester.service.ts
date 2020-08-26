import { Injectable, OnInit } from '@angular/core';
import * as db from '../../assets/db.json';

@Injectable({
  providedIn: 'root',
})
export class DbRequesterService implements OnInit {
  voitures: Array<any>;
  users: Array<any>;
  profiles: Array<any>;

  constructor()  {
    
   }

  ngOnInit() {
    
  }
  
  getByKey(key) {
    console.log("logging into getByKey method");
    if(key === "voitures") {
      this.voitures = db.voitures;
      console.log("key : ", key, "   db  voitures : ", this.voitures);
      return this.voitures;
    }
    else if(key === "users") {
      this.users = db.users;
      console.log("key : ", key, "   db  users : ", this.users);
      return this.users;
    }
    else if(key === "profiles") {
      this.profiles = db.profiles;
      console.log("key : ", key, "   db  profiles : ", this.profiles);
      return this.profiles;
    }
  }
}
// getJSON(): Observable<any> {
  //   console.log("executing get json : ")
  //   return this.http.get('../../assets/db.json');
  // }