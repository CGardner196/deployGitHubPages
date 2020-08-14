import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuccessMsgComponent } from './success-msg/success-msg.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [NavbarComponent, SidebarComponent, SuccessMsgComponent, ErrorMsgComponent, BehaviourSubjectComponent],
  imports: [
    CommonModule, 
    FontAwesomeModule
  ],
  exports: [NavbarComponent, SidebarComponent, SuccessMsgComponent, ErrorMsgComponent]
})
export class ComponentsModule { }
