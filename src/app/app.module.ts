import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UsersModule } from './components/users-page/users-page.module';

import { ChartistModule } from 'ng-chartist';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromUser from './store/reducers/users.reducer';
import * as fromDocuments from './store/reducers/documents.reducer';
import { DocumentsPageModule } from './components/documents-page/documents-page.module';
import { DocumentsCreatePageComponent } from './components/documents-create-page/documents-create-page.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginPageModule } from './components/login-page/login-page.module';
import { DashboardInfoComponent } from './components/dashboard-info/dashboard-info.component';

const oktaConfig = {
  issuer: 'https://dev-6194344.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/callback',
  clientId: '0oafes7j71WqSLfxP5d5',
  scopes: ['openid', 'profile'],
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ToastsComponent,
    DashboardInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    HttpClientModule,
    OktaAuthModule,
    NgbModule,
    ReactiveFormsModule,
    UsersModule,
    DocumentsPageModule,
    LoginPageModule,
    ChartistModule,
    StoreModule.forRoot({
      users: fromUser.reducer,
      documents: fromDocuments.reducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ToastsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
