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
  imageSrc: string;
  constructor(private store: StoreService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      login: [''],
      pwd: [''], 
      file: ['']
      // fileSource: ['']
      
    })
    if(this.route.snapshot.params["login"]){
      this.initFormValues(this.route.snapshot.params);
    }
  }

  initFormValues(row) {
    this.form.controls["login"].setValue(row.login);
    this.form.controls["name"].setValue(row.name);
    this.form.controls["pwd"].setValue(row.pwd);
    this.imageSrc = row.fileSrc;
  }




  onSubmit(user) {
    if(!this.route.snapshot.params["login"]) {
      console.log("adding a new one : ", user);
      const reader = new FileReader();
      reader.onload = () => {
        user['fileSrc'] = reader.result as string;
      }
      reader.readAsDataURL(this.form['file']);
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
      console.log("editing an existing value : ", user);
      
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

  onFileChange(event) {
    // Image Preview
    console.log("loggging ...");
    // console.log("event target : -*****-*-", event.target);
    const fileImage = <HTMLInputElement>event.target.files[0];
    console.log("after *********", <HTMLInputElement>event.target.files[0])
    // if(event.target.files && event.taget.files.length) {
    // const [file] = event.target.files;
    this.form['file'] = fileImage;
    // // .patchValue({
    // //   file: fileImage
    // // })
    // this.form.get('file').updateValueAndValidity();


    //File Preview
    const reader = new FileReader();
    // reader.readAsDataURL(file); 
    reader.onload = () => {
      console.log("reader result : ", reader.result);
      this.imageSrc = reader.result as string;
    };
    reader.readAsDataURL(this.form['file']);
    // }
  }

}
