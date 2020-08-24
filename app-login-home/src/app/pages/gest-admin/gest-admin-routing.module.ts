import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFrmComponent } from './user-frm/user-frm.component';

const routes: Routes = [
  { path: 'listusers', component: UserListComponent}, 
  { path: 'listusers/frmuser', component: UserFrmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestAdminRoutingModule { }
