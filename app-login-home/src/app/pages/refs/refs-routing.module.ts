import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefListComponent } from './ref-list/ref-list.component';
import { LoggedInGuard } from 'src/app/services/logged-in.guard';
import { RefFrmComponent } from './ref-frm/ref-frm.component';

const routes: Routes = [
  { path: 'refslist', component: RefListComponent},
  { path: 'frmref', component: RefFrmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefsRoutingModule { }
