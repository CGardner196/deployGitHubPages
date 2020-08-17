import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store: StoreService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.store.currentUser = null;
    this.router.navigate(['/login']);
  }
}
