import { Component, OnInit } from '@angular/core';
import { faTrash, faPencilAlt, faPlusCircle, faSort } from '@fortawesome/free-solid-svg-icons';
import { StoreService } from 'src/app/services/store.service';
import { OrderPipe } from "ngx-order-pipe";

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {
  // voitures: Voiture[];
  faSortIcon = faSort;
  order: string = "mark";
  reverse: boolean = false;
  voitures;
  rows; 
  query: string = "";
  sortedVoitures: any[];
  deleteIcon = faTrash;
  editIcon = faPencilAlt;
  plusIcon = faPlusCircle;
  
  constructor(private store: StoreService, private orderPipe: OrderPipe) { 
   
    this.voitures = this.store.getVoitures();
    this.sortedVoitures = orderPipe.transform(this.voitures, 'mark');
  }

  ngOnInit(): void {
    
  }

  setOrder(value: string) {
    if(this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  onDelete(row) {
    this.store.deleteVoiture(row.matricule);
  }

}
