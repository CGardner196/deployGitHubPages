import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefsRoutingModule } from './refs-routing.module';
import { RefListComponent } from './ref-list/ref-list.component';
import { RefFrmComponent } from './ref-frm/ref-frm.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [RefListComponent, RefFrmComponent],
  imports: [CommonModule, RefsRoutingModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [RefListComponent, RefsRoutingModule, RefFrmComponent]
})
export class RefsModule { }
