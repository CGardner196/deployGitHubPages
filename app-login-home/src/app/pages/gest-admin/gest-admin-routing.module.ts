import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFrmComponent } from './user-frm/user-frm.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  { path: 'listusers', component: UserListComponent }, 
  { path: 'frmuser', component: UserFrmComponent },
  { path: 'listprofiles', component: UserProfilComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestAdminRoutingModule { }
