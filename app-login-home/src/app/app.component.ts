import { Component, HostListener } from '@angular/core';
import { StoreService } from './services/store.service';
import * as db from '../assets/db.json';

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
    // for(let user in db.users) {
    //   // console.log(db.users.findIndex(JSON.parse(user)));
    // }
    // sessionStorage.setItem("users", db.users.toString());
  }

  // @HostListener("window:beforeunload", ["$event"])
  // loadUsers(event: Event) {
  //   this.store.setUsers(this.users);
  // }
}
