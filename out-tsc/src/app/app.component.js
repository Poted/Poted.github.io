import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'wsei-app';
        this.navColor = 0;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    setColor() {
        let myColor = {
            active: this.navColor == 0,
            notactive: this.navColor == 1
        };
        return myColor;
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: '/app.component.html',
        styleUrls: ['/app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map