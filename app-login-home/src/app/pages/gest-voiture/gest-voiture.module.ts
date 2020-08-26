import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestVoitureRoutingModule } from './gest-voiture-routing.module';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureFrmComponent } from './voiture-frm/voiture-frm.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterVoitPipe } from './filter-voit.pipe';

import { OrderModule } from "ngx-order-pipe";

import { NgxPaginationModule } from 'ngx-pagination';
import { VoitBeforeXYearDirective } from './voit-before-xyear.directive';


@NgModule({
  declarations: [VoitureListComponent, VoitureFrmComponent, FilterVoitPipe, VoitBeforeXYearDirective],
  imports: [
    CommonModule,
    GestVoitureRoutingModule, 
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    OrderModule,
    NgxPaginationModule
  ],
  exports: [
    VoitureListComponent, 
    VoitureFrmComponent, 
    GestVoitureRoutingModule,
    OrderModule
  ]
})
export class GestVoitureModule { }
