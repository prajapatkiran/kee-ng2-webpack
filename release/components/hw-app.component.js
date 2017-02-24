"use strict";
var core_1 = require('@angular/core');
var HwAppComponent = (function () {
    function HwAppComponent() {
        //
    }
    HwAppComponent.prototype.ngOnInit = function () {
        //
    };
    HwAppComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'kee-hw-app',
                    template: "<p>\n    hw-app works!\n    <kee-app-abcd></kee-app-abcd>\n  </p>\n  <nav>\n    <a routerLink=\"/kee-hw-app/hello-world\" routerLinkActive=\"active\">Kee Hello World Route!</a>\n  </nav>\n  <nav>\n    <a routerLink=\"/kee-hw-app/hello-world-sub\" routerLinkActive=\"active\">\n      Kee Hello World -:Sub:- Route!\n    </a>\n  </nav>\n  <router-outlet></router-outlet>",
                    styleUrls: ['./hw-app.component.scss']
                },] },
    ];
    /** @nocollapse */
    HwAppComponent.ctorParameters = function () { return []; };
    return HwAppComponent;
}());
exports.HwAppComponent = HwAppComponent;
//# sourceMappingURL=hw-app.component.js.map