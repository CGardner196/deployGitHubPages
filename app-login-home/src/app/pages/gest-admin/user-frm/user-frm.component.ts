import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-frm',
  templateUrl: './user-frm.component.html',
  styleUrls: ['./user-frm.component.css']
})
export class UserFrmComponent implements OnInit {
  form;

  constructor(private store: StoreService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      login: [''],
      pwd: ['']
      
    })
    if(this.route.snapshot.params){
      this.initFormValues(this.route.snapshot.params);
    }
  }

  initFormValues(row) {
    this.form.controls["login"].setValue(row.login);
    this.form.controls["name"].setValue(row.name);
    this.form.controls["pwd"].setValue(row.pwd);
  }
  onSubmit(user) {
    if(!this.route.snapshot.params["login"]) {
      console.log("adding a new one : ", user);
      // create user
      this.store.addUser(user);
      this.store.users.subscribe(
        res => {},
        err => {
          console.log("error on creating a new user")
        }
      );
    }
    else {
      // editing an existing value
      this.store.editUser(user, this.route.snapshot.params['login']);
      this.store.users.subscribe(
        res => {},
        err => {
          console.log("error on editing a value");
        }
      );
    }
      
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
