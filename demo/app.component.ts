import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['../src/themes/material.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div>
    <nav>
      <a routerLink="" routerLinkActive="active">Home</a>
      <a routerLink="kee-hw-app" routerLinkActive="active">Kee Hello World App</a>
    </nav>
    <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

  constructor() {
    //
  }

}
