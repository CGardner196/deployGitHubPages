import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faTrash, faPencilAlt, faPlusCircle, faSort } from '@fortawesome/free-solid-svg-icons';
import { StoreService } from 'src/app/services/store.service';
import { OrderPipe } from "ngx-order-pipe";

// import { pagination } from 'jw-angular-pagination';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {

  faSortIcon = faSort;
  order: string = "mark";
  reverse: boolean = false;
  voitures;
  rows; 
  query: string = "";
  sortedVoitures: any[];
  pageOfItems: any[];
  deleteIcon = faTrash;
  editIcon = faPencilAlt;
  plusIcon = faPlusCircle;
  
  // Pagination
  config: any;
  // @Output() changePage = new EventEmitter<any>(true);
  // @Input() initialPage = 1;
  // @Input() pageSize = 10;
  // @Input() maxPages = 10;

  // pager: any = {};


  constructor(private store: StoreService, private orderPipe: OrderPipe) { 
   
    this.voitures = this.store.getVoitures();
    this.sortedVoitures = orderPipe.transform(this.voitures, 'mark');
    this.config = {
      itemsPerPage: 15,
      currentPage: 1,
      totalItems: this.voitures.length
    }
  }

  ngOnInit(): void {
    
  }

  setOrder(value: string) {
    if(this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if( changes.items.currentValue !== changes.items.previousValue ) {
  //     this.setPage(this.initialPage);
  //   }
  // }

  // private setPage(page: number) {
  //   // this.pager = paginate(this.voitures.length, page, this.pageSize, this.maxPages);

  //   let pageOfItems = this.voitures.slice(this.pager.startIndex, this.pager.endIndex +1);

  //   this.changePage.emit(pageOfItems);
  // }

  onDelete(row) {
    this.store.deleteVoiture(row.matricule);
    this.store.voitures.subscribe(res => {
      
    },
    err => {
      console.log("error on deleting a value : ", row);
    });
    this.voitures = this.store.getVoitures();
    // this.sortedVoitures = this.orderPipe.transform(this.voitures, 'annee');
    // i should reload page, bcz changes not effective instantaniously
  }

  onChangePage(pageOfItems: any[]){
    this.pageOfItems = pageOfItems;
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
