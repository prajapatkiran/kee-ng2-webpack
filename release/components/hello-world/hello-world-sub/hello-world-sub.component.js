"use strict";
var core_1 = require('@angular/core');
var HelloWorldSubComponent = (function () {
    function HelloWorldSubComponent() {
    }
    HelloWorldSubComponent.prototype.ngOnInit = function () {
    };
    HelloWorldSubComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-hello-world-sub',
                    template: "<p>\n    Hello, World! from sub-componnt!\n  </p>",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    HelloWorldSubComponent.ctorParameters = function () { return []; };
    return HelloWorldSubComponent;
}());
exports.HelloWorldSubComponent = HelloWorldSubComponent;
//# sourceMappingURL=hello-world-sub.component.js.map