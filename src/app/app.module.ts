import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DemoComponent } from './demo/demo.component';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    MaterialModule,
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