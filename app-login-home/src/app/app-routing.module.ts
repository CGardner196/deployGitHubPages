import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form.component';
import { HomeComponent } from './home/home.component';
import { SuccessMsgComponent } from './components/success-msg/success-msg.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';


const routes: Routes = [
  {path: 'success', component: SuccessMsgComponent},
  {path: 'error', component: ErrorMsgComponent},
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
