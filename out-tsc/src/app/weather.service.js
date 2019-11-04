import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
    }
    getWeather() {
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Krakow,pl&units=metric&APPID=27fb06eff110da6e544232a4a5fde82e');
    }
};
WeatherService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], WeatherService);
export { WeatherService };
//# sourceMappingURL=weather.service.js.map