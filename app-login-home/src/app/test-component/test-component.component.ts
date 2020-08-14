import { Component, OnInit, HostListener } from '@angular/core';

import { StoreService } from '../services/store.service';
import { SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  users = [
    {key:1, name:"Rahim", login:"dahmoudi@dahmoudi.com"},
    {key:2, name:"Don", login:"johnson@johnson.com"},
    {key:3, name:"Sandy", login:"kilo@kilo.com"},
    {key:4, name:"Zebra", login:"zebra@zebra.com"},
  ];

  constructor(private store: StoreService) {
   }

  ngOnInit(): void {
  }

  @SessionStorage() sessionUsers = this.users;

  @HostListener("window:beforeunload", ["$event"])
  loadUsers(event: Event) {
    this.store.setUsers = this.users;
  }

}
