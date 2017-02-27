"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var hw_app_component_1 = require('./components/hw-app.component');
var hello_world_component_1 = require('./components/hello-world/hello-world.component');
var hello_world_sub_component_1 = require('./components/hello-world/hello-world-sub/hello-world-sub.component');
var abcd_component_1 = require('./components/abcd/abcd.component');
var hw_app_routing_module_1 = require('./hw-app.routing.module');
var HwAppModule = (function () {
    function HwAppModule() {
    }
    HwAppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        hw_app_routing_module_1.HwAppRoutingModule,
                        http_1.HttpModule
                    ],
                    declarations: [
                        hw_app_component_1.HwAppComponent,
                        hello_world_component_1.HelloWorldComponent,
                        hello_world_sub_component_1.HelloWorldSubComponent,
                        abcd_component_1.AbcdComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    HwAppModule.ctorParameters = function () { return []; };
    return HwAppModule;
}());
exports.HwAppModule = HwAppModule;
//# sourceMappingURL=hw-app.module.js.map