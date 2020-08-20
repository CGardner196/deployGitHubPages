import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestVoitureRoutingModule } from './gest-voiture-routing.module';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureFrmComponent } from './voiture-frm/voiture-frm.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterVoitPipe } from './filter-voit.pipe';

import { OrderModule } from "ngx-order-pipe";

@NgModule({
  declarations: [VoitureListComponent, VoitureFrmComponent, FilterVoitPipe],
  imports: [
    CommonModule,
    GestVoitureRoutingModule, 
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    OrderModule
  ],
  exports: [
    VoitureListComponent, 
    VoitureFrmComponent, 
    GestVoitureRoutingModule,
    FilterVoitPipe,
    OrderModule
  ]
})
export class GestVoitureModule { }
