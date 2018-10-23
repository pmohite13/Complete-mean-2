import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DemoComponent } from './demo/demo.component';
import { MaterialModule } from './shared/material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    }),
    MaterialModule,
    MDBBootstrapModule,
    AppRoutingModule,
    CoreModule,     //Singleton objects
    SharedModule  //Shared (multi-instance) objects
  ],
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    DemoComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }