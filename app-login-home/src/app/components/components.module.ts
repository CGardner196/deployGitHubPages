import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuccessMsgComponent } from './success-msg/success-msg.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, SuccessMsgComponent, ErrorMsgComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
