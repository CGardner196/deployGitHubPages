import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestAdminRoutingModule } from './gest-admin-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserFrmComponent } from './user-frm/user-frm.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

// ng select module
import { NgSelectModule } from "@ng-select/ng-select";
import { ProfilUserListPipe } from './profil-user-list.pipe';


// Ng Mutli select  drop down module 
// https://www.npmjs.com/package/ng-multiselect-dropdown
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [UserListComponent, UserFrmComponent, UserProfilComponent, ProfilUserListPipe],
  imports: [
    CommonModule,
    GestAdminRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ], 
  exports: [
    UserListComponent,
    GestAdminRoutingModule
  ]
})
export class GestAdminModule { }
