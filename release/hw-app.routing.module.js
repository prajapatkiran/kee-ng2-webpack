"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hw_app_component_1 = require('./components/hw-app.component');
var hello_world_component_1 = require('./components/hello-world/hello-world.component');
var hello_world_sub_component_1 = require('./components/hello-world/hello-world-sub/hello-world-sub.component');
var HwAppRoutingModule = (function () {
    function HwAppRoutingModule() {
    }
    HwAppRoutingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [router_1.RouterModule.forChild([
                            { path: 'kee-hw-app', component: hw_app_component_1.HwAppComponent },
                            { path: 'kee-hw-app/hello-world', component: hello_world_component_1.HelloWorldComponent },
                            { path: 'kee-hw-app/hello-world-sub', component: hello_world_sub_component_1.HelloWorldSubComponent }
                        ])],
                    exports: [router_1.RouterModule]
                },] },
    ];
    /** @nocollapse */
    HwAppRoutingModule.ctorParameters = function () { return []; };
    return HwAppRoutingModule;
}());
exports.HwAppRoutingModule = HwAppRoutingModule;
//# sourceMappingURL=hw-app.routing.module.js.map