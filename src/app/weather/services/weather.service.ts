import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { CityWeather } from "../model/weather-dto";

import "rxjs/add/operator/toPromise";

@Injectable()
export class WeatherService {
  private apiUrl: String = "https://api.openweathermap.org/data/2.5/weather";
  private apiKey: String = "f70e1c3d83ebd5fe42e9f0bc0004c5e4";
  constructor(private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCityWeather(cityName: String): Promise<CityWeather> {
    return this.http
      .get(`${this.apiUrl}?q=${cityName}&units=metric&APPID=${this.apiKey}`)
      .toPromise()
      .then(response => response.json() as CityWeather)
      .catch(this.handleError);
  }
}
