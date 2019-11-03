import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AboutComponent = class AboutComponent {
    constructor(_width) {
        this._width = _width;
        this.width = window.innerWidth;
    }
    ngOnInit() {
    }
    spanClick() {
        console.log("Hello");
    }
};
AboutComponent = tslib_1.__decorate([
    Component({
        selector: 'app-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.scss']
    })
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=about.component.js.map