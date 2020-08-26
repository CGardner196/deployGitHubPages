import { Component, HostListener } from '@angular/core';
import { StoreService } from './services/store.service';
import { DbRequesterService } from './services/db-requester.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-login-home';

  constructor(private store: StoreService, private dbRequester: DbRequesterService) {}

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
      sessionStorage.setItem("voitures", JSON.stringify(this.store.getVoitures()));
      sessionStorage.setItem("users", JSON.stringify(this.store.getUsers()));
      sessionStorage.setItem("profiles", JSON.stringify(this.store.getProfiles()));
    }
    // sessionStorage.setItem("refElems", JSON.stringify(this.store.getRefElms()));
  }

}
