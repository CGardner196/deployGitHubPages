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
    if(sessionStorage.getItem("currentUser")){
      this.store.currentUser = sessionStorage.getItem("currentUser");
    }
  }

  @HostListener("window:beforeunload", ["$event"])
  saveSessionData(event: Event) {
    if(this.store.currentUser) {
      sessionStorage.setItem("currentUser", this.store.currentUser);
      sessionStorage.setItem("refElems", JSON.stringify(this.store.getRefElms()));
    }
    // sessionStorage.setItem("refElems", JSON.stringify(this.store.getRefElms()));
  }

}
