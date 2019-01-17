import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { CityWeather } from "../../model/weather-dto";

import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs";

@Injectable()
export class WeatherService {
  private apiUrl: String = "https://api.openweathermap.org/data/2.5/weather";
  private apiKey: String = "f70e1c3d83ebd5fe42e9f0bc0004c5e4";
  
  constructor(private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCityWeather(cityName: String): Observable<CityWeather> {
    return this.http
    .get(`${this.apiUrl}?q=${cityName}&units=metric&APPID=${this.apiKey}`)
    .map( response => response.json() as CityWeather);
  }

  /** Gonna get the ids of Barcelona, Washington and London to use in the near future */
  getCitiesWheathersInterval(minutes: number): Observable<Array<CityWeather>> {
    const observables = [ 
      this.getCityWeather("Barcelona"), 
      this.getCityWeather("Londres"),
      this.getCityWeather("Washington")
    ];

    return Observable.interval(minutes * 60 *1000).switchMap(t => Observable.forkJoin(observables));
  }

  /** Get the current weathers for the first time */
  getDefaultCitiesWeather(cities: Array<string>) {
    const promises = cities.map(c => this.getCityWeather(c).toPromise());
    return Promise.all(promises).then(response => response.map(r => r)); 
  }
}
