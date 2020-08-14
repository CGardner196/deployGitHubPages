import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // home() {
  //   this.router.navigate(['/home']);
  // }
  // login() {
  //   this.router.navigate(['/login']);
  // }
}
