import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureFrmComponent } from './voiture-frm/voiture-frm.component';

const routes: Routes = [
  { path: 'listvoitures', component: VoitureListComponent },
  { path: 'listvoitures/frmvoiture', component: VoitureFrmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestVoitureRoutingModule { }
