import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['../src/themes/material.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div>
        <kee-hw-app></kee-hw-app>
    </div>
  `
})
export class AppComponent {

  constructor() {
    //
  }

}
