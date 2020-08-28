import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { faPlusCircle, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  plusIcon = faPlusCircle;
  deleteIcon = faTrash;
  editIcon = faPencilAlt;
  constructor(private store: StoreService, private router: Router, private route: ActivatedRoute) { 
    this.users = this.store.getUsers();
   }

  ngOnInit(): void {

    // displaying fileSrc
    // this.users.forEach(user => {
      // console.log("user fileSrc : ", user.fileSrc);
    // })



    // console.log("users : ", this.users);
    // reader.onload = () => {
    //   console.log("reader result : ", reader.result);
    //   this.users.map = reader.result as string;
    // };
    // reader.readAsDataURL(this.form['file']);
  }

  onDelete(row) {
    this.store.deleteUser(row.login);
    this.users = this.store.getUsers();
  }

  onEdit(row) {
    // const rowU = JSON.stringify(row);
    row.profiles = JSON.stringify(row.profiles);
    // this.router.navigate(['./frmuser'], {rfelativeTo: this.route, queryParams : { rowUser: rowU, rowProfiles: profilesS }});//  , relativeTo: this.route);
    this.router.navigate(['./home/gestAdmin/frmuser', row]);//, {queryParams : { rowUser: rowU}});//  , relativeTo: this.route);
    // this.router.navigate(['../'], {relativeTo: this.route});
  }
  
}
