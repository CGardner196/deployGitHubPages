import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faTrash, faPencilAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  deleteIcon = faTrash;
  editIcon = faPencilAlt;
  plusIcon = faPlusCircle;
  profileCode: string = "";
  form;
  editMode : boolean = false;
  profiles;

  constructor(private store: StoreService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.profiles = this.store.getProfiles();
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      code: [''],
      name: ['']
    })
  }



  // on submit form : editing or creating
  onSubmit(profile) {
    if (!this.editMode) {
      this.store.addProfile(profile);
    }
    else {
      this.store.editProfile(profile, this.profileCode);
      // this.store.setRefElms(this.refElems);
      this.editMode = false;
      this.profileCode = "";
    }
    this.profiles = this.store.getProfiles();
    // point d'arrêt : uncomment this comment
    this.form.controls["code"].setValue("");
    this.form.controls["name"].setValue("");

  }

  onEdit(profile) {
    this.form.controls["code"].setValue(profile.code);
    this.form.controls["name"].setValue(profile.name);
    this.editMode = true;
    this.profileCode = profile.code;
  }

  onDelete(profile) {
    this.store.deleteProfile(profile.code);
    this.profiles = this.store.getProfiles();
  }

}
