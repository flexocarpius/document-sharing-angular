import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'callback',
    component: OktaCallbackComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./components/users-page/users-page.module').then(
        (m) => m.UsersModule
      )
  },
  {
    path: 'documents',
    loadChildren: () =>
      import('./components/documents-page/documents-page.module').then(
        (m) => m.DocumentsPageModule
      )
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
