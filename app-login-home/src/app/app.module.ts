import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TestComponentComponent } from './test-component/test-component.component';

import { AuthService } from './auth/auth.service';
import { LoggedInGuard } from './services/logged-in.guard';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { RefsModule } from './pages/refs/refs.module';

// Font Awesome
// import { FontAwesomeModule } from '@fdortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Services
// import { StoreService } from './services/store.service';


@NgModule({
  declarations: [AppComponent, LoginFormComponent, HomeComponent, TestComponentComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule, ComponentsModule, RefsModule, FontAwesomeModule],
  providers: [AuthService, LoggedInGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
