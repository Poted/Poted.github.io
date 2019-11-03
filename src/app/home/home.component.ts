import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  width: number = this._width.width;
  height: number = this._height.height;
  weather: any;
  show: boolean = true;
  source: string;
 

  constructor(
     private _width: AppComponent,
     private _height: AppComponent,
     private _http: WeatherService
     ) { }

  ngOnInit() {
    this._http.getWeather().subscribe(data => {
      this.weather = data;
      this.source = "https://openweathermap.org/img/wn/" + this.weather.weather[0].icon + "@2x.png"
      console.log(this.weather);
    });
  }

  showWeather() {
    this.show = true
  }
}
