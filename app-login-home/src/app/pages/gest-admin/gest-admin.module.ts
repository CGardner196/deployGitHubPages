import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestAdminRoutingModule } from './gest-admin-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserFrmComponent } from './user-frm/user-frm.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

@NgModule({
  declarations: [UserListComponent, UserFrmComponent, UserProfilComponent],
  imports: [
    CommonModule,
    GestAdminRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ], 
  exports: [
    UserListComponent,
    GestAdminRoutingModule
  ]
})
export class GestAdminModule { }
