import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: 'home', component: AppComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);