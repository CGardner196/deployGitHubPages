import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SuccessMsgComponent } from './components/success-msg/success-msg.component'
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ComponentsModule } from './components/components.module';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, LoginFormComponent, HomeComponent, NavbarComponent, SidebarComponent,
    SuccessMsgComponent, ErrorMsgComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
