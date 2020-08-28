import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form.component';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms'; issue 22
import { HomeComponent } from './home/home.component';
import { TestComponentComponent } from './test-component/test-component.component';

import { AuthService } from './auth/auth.service';
// import { DbRequesterService } from './services/db-requester.service';
import { LoggedInGuard } from './services/logged-in.guard';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { ComponentsModule } from './components/components.module'; issue 22

// issue 22 : AppCommon Module includes: componentsModule, ReactiveFormsModule, FormsModule
import { AppCommonModule } from './app-common/app-common.module';

import { RefsModule } from './pages/refs/refs.module';
import { GestVoitureModule } from './pages/gest-voiture/gest-voiture.module';
import { GestAdminModule } from './pages/gest-admin/gest-admin.module';

// Font Awesome Module (official)
// import { AngularFontAwesomeModule } from "angular-font-awesome";
// Font Awesome
// import { FontAwesomeModule } from '@fdortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeContentComponent } from './home-content/home-content.component';

import { HttpClientModule } from '@angular/common/http';
// Services
// import { StoreService } from './services/store.service';


@NgModule({
  declarations: [AppComponent, LoginFormComponent, HomeComponent, TestComponentComponent, HomeContentComponent],
  imports: [BrowserModule, AppRoutingModule, 
    NgbModule, AppCommonModule,
    RefsModule, FontAwesomeModule, GestVoitureModule, GestAdminModule, HttpClientModule],
  providers: [AuthService, LoggedInGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
