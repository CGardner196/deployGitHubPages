import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuccessMsgComponent } from './success-msg/success-msg.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
  declarations: [NavbarComponent, SidebarComponent, SuccessMsgComponent, ErrorMsgComponent, 
    BehaviourSubjectComponent, NotFoundPageComponent],
  imports: [
    RouterModule,
    CommonModule, 
    FontAwesomeModule
  ],
  exports: [NavbarComponent, SidebarComponent, SuccessMsgComponent, ErrorMsgComponent, RouterModule, NotFoundPageComponent]
})
export class ComponentsModule { }
