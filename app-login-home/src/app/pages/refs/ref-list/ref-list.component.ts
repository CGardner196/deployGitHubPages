import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ref-list',
  templateUrl: './ref-list.component.html',
  styleUrls: ['./ref-list.component.css']
})
export class RefListComponent implements OnInit {

  refs;

  constructor(private store: StoreService, private router: Router) { }

  ngOnInit(): void {
    this.refs = this.store.getRefs();
  }

}
