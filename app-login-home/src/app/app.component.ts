import { Component, HostListener } from '@angular/core';
import { StoreService } from './services/store.service';
import * as db from '../assets/db.json';
import * as Collections from 'typescript-collections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-login-home';

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.store.setUsers(db.users);
    console.log(db.users);
    this.store.setRefs(db.refs);
    console.log(db.refs);

    // this.store.setRefsData(db.refs);
    if(sessionStorage.getItem("currentUser")){
      this.store.currentUser = sessionStorage.getItem("currentUser")
    }
    if(sessionStorage.getItem("refsData")){
      // this.store.refsData = JSON.parse(sessionStorage.getItem("refsData"));
      // sessionStorage.removeItem("refsData");
    }
  }

  @HostListener("window:beforeunload", ["$event"])
  saveSessionData(event: Event) {
    if(this.store.currentUser) {
      sessionStorage.setItem("currentUser", this.store.currentUser);
      console.log("Ref Data : ", this.store.getRefsData());      
      sessionStorage.setItem("refsData", this.store.getRefsData());
      console.log("host listener event in app.component.ts");
    }
  }
}
