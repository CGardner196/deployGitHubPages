import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: StoreService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  
}
