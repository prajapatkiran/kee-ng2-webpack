import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HwAppModule } from '../src';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, HwAppModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
