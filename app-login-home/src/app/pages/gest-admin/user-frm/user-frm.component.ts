import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Drop down select package
import { Profile } from 'src/app/models/profile';


@Component({
  selector: 'app-user-frm',
  templateUrl: './user-frm.component.html',
  styleUrls: ['./user-frm.component.css']
})
export class UserFrmComponent implements OnInit {
  form;
  title: string = "Ajouter un utilisateur";
  imageSrc: string;
  constructor(private store: StoreService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  // multiple select Dropdown 
  dropdownList = [];
  selectedProfiles: Profile[] = [];
  // dropdownSettings: IDropdownSettings = {};

  queryParams;


  ngOnInit(): void {

    this.dropdownList = this.store.getProfiles();
    this.form = this.fb.group({
      name: [''],
      login: [''],
      pwd: [''], 
      file: [''],
      profiles: ['']
    })
    // console.log(this.route.snapshot.queryParams)
    // if(this.route.snapshot.queryParams) {
      
    // if(this.route.snapshot.params) {
    if(this.route.snapshot.queryParamMap.has("rowUser")){
      this.title = "Modifier un utilisateur";
        // console.log(JSON.parse(this.route.snapshot.queryParamMap.get("rowUser")));
        this.initFormValues(JSON.parse(this.route.snapshot.queryParamMap.get("rowUser")));
    }
    //   console.log(JSON.parse(this.route.snapshot.queryParamMap.get("rowUser")));
    // }
    // console.log("logging into route query params 1...");
    // this.route.queryParams.subscribe(params => {
    //   this.queryParams = params.get('rowUser');
    // })

    // this.queryParams = this.route.
    //  ('rowUser');

    // console.log("this.queryParams : ....****** ", this.queryParams);
    // if(this.queryParams){
    //   console.log("logging into route query params ...");
    //   this.initFormValues(this.queryParams);
    // }

    
    
    
  }


  initFormValues(row) {
    
    this.form.controls["login"].setValue(row.login);
    this.form.controls["name"].setValue(row.name);
    this.form.controls["pwd"].setValue(row.pwd);
    // console.log(row.profiles);
    for(const profile of row.profiles) {
      this.selectedProfiles.push(new Profile(profile.code, profile.name));
    }
    this.imageSrc = row.fileSrc;
    // this.form.controls["profiles"].setValue(this.selectedProfiles);
    // this.form.controls["file"].setValue(row.file);
    // this.imageSrc = row.fileSrc;

    // this.form.controls["profiles"].setValue(this.selectedProfiles);
    // this.selectedProfiles = row.profiles;
    // console.log(this.selectedProfiles);
    // this.imageSrc = row.fileSrc;
    // console.log(row);
    // this.selectedProfiles = row.profiles;
    // this.form.controls["profiles"].setValue(this.selectedProfiles);
    // this.form.controls["profiles"].setValue(selectedUsers);
    
    
    // this.form.controls["profiles"].setValue(row.profiles) 
  }




  onSubmit(user) {
    user['fileSrc'] = this.imageSrc;
    if(!this.route.snapshot.queryParamMap.has("rowUser")) {
      console.log("adding a new one : ", user);
      user['fileSrc'] = this.imageSrc; 
      // console.log("selected profiles : ", user.profiles);

      // console.log("before : ", user.fileSrc);
      
      this.store.addUser(user);
    }

    else {


      // editing an existing value
      // console.log("editing an existing value : ", user);
      // console.log(JSON.parse(this.route.snapshot.queryParamMap.get("rowUser")).login);
      this.store.editUser(user, JSON.parse(this.route.snapshot.queryParamMap.get("rowUser")).login);
      // console.log(this.store.getUsers());
      this.router.navigate(['./home/gestAdmin/listusers']);
      
    }
    // this.route.snapshot.queryParams.clear();
    // this.router.navigate(['../'], {relativeTo: this.route});
    this.router.navigate(['./home/gestAdmin/listusers']);
  }

  onFileChange(event) {
    const fileImage = <HTMLInputElement>event.target.files[0]; 
    this.form['file'] = fileImage;
    // Image Preview
    // console.log("loggging ...");
    // console.log("event target : -*****-*-", event.target);
    
    // console.log("after *********", <HTMLInputElement>event.target.files[0])
    // if(event.target.files && event.taget.files.length) {
    // const [file] = event.target.files;
    
    // // .patchValue({
    // //   file: fileImage
    // // })
    // this.form.get('file').updateValueAndValidity();


    //File Preview
    const reader = new FileReader();
    // reader.readAsDataURL(file); 
    reader.onload = () => {
      // console.log("reader result : ", reader.result);
      this.imageSrc = reader.result as string;
    };
    reader.readAsDataURL(this.form['file']);
    // }
    // this.form['fileSrc'] = this.imageSrc;
  }

}
