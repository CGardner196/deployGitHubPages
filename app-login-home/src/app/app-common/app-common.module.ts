import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ComponentsModule, ReactiveFormsModule, FormsModule
  ], 
  exports: [
    ComponentsModule, ReactiveFormsModule, FormsModule
  ]
})
export class AppCommonModule { }
