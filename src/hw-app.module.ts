import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HwAppComponent } from './components/hw-app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { HelloWorldSubComponent } from
  './components/hello-world/hello-world-sub/hello-world-sub.component';
import { AbcdComponent } from './components/abcd/abcd.component';

import { HwAppRoutingModule } from './hw-app.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HwAppRoutingModule
  ],
  declarations: [
    HwAppComponent,
    HelloWorldComponent,
    HelloWorldSubComponent,
    AbcdComponent
  ]
})
export class HwAppModule { }
