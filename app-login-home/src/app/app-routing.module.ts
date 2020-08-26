import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form.component';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './services/logged-in.guard';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HomeContentComponent } from './home-content/home-content.component';




const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard],
    children: [
      { path: "homecontent", component: HomeContentComponent },
      { path: "refs", loadChildren: () => import('./pages/refs/refs.module').then(m => m.RefsModule) },
      { path: "gestVoit", loadChildren: () => import('./pages/gest-voiture/gest-voiture.module').then(m => m.GestVoitureModule) },
      { path: "gestAdmin", loadChildren: () => import('./pages/gest-admin/gest-admin.module').then(m => m.GestAdminModule) }
      ]
  },
  { path: '**', component: NotFoundPageComponent } // 404 page not found
];

// RefFrmComponent

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


// {path: 'success', component: SuccessMsgComponent},
// {path: 'error', component: ErrorMsgComponent},
// {path: 'behavioursubject', component: BehaviourSubjectComponent},

// { path: 'testcomponent', component: TestComponentComponent },
// import { TestComponentComponent } from './test-component/test-component.component';

// import { SuccessMsgComponent } from './components/success-msg/success-msg.component';
// import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
// import { BehaviourSubjectComponent } from './components/behaviour-subject/behaviour-subject.component';
