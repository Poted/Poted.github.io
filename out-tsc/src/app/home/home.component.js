import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(_width, _height, _http) {
        this._width = _width;
        this._height = _height;
        this._http = _http;
        this.width = this._width.width;
        this.height = this._height.height;
    }
    ngOnInit() {
        this._http.getWeather().subscribe(data => {
            this.weather = data;
            console.log(this.weather);
        });
    }
    cloudsSetter() {
        if (this.weather.toString().includes('broken'))
            return ("hi");
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map