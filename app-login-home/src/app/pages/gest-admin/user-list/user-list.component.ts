import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { faPlusCircle, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users;
  plusIcon = faPlusCircle;
  deleteIcon = faTrash;
  editIcon = faPencilAlt;
  constructor(private store: StoreService) { 
    this.users = this.store.getUsers();
   }

  ngOnInit(): void {
  }

  onDelete(row) {
    this.store.deleteUser(row.login);
    this.store.users.subscribe(res => {}, 
      err => {
        console.log("error on deleting a user : ", row);
    })
  }

  // onDelete(row) {
  //   this.store.deleteVoiture(row.matricule);
  //   this.store.voitures.subscribe(res => {},
  //     err => {
  //       console.log("error on adding a value");
  //     });
  //   this.voitures = this.store.getVoitures();
  //   // i should reload page, bcz changes not effective instantaniously
  // }

}
