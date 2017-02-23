import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HwAppModule } from '../src';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HwAppModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
