import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Krakow,pl&units=metric&APPID=27fb06eff110da6e544232a4a5fde82e')
  }

}
