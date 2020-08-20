import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestVoitureRoutingModule } from './gest-voiture-routing.module';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureFrmComponent } from './voiture-frm/voiture-frm.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [VoitureListComponent, VoitureFrmComponent],
  imports: [
    CommonModule,
    GestVoitureRoutingModule, 
    FontAwesomeModule
  ],
  exports: [
    VoitureListComponent, 
    VoitureFrmComponent, 
    GestVoitureRoutingModule
  ]
})
export class GestVoitureModule { }
