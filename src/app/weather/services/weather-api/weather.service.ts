import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CityWeather } from '../../model/weather-dto';
import { environment } from './../../../../environments/environment';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class WeatherService {

  private apiUrl: String = environment.weatherApiUrl;
  private apiKey: String = environment.weatherApiKey;

  private weathersSource = new Subject<Array<CityWeather>>();

  constructor(private http: Http) {}

  /** Generic error handler */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /**
   * Returns the weather of the city.
   * @param cityName name of the city which its weather is going to be requested 
   */
  getCityWeather(cityName: String): Observable<CityWeather> {
    return this.http
    .get(`${this.apiUrl}?q=${cityName}&units=metric&APPID=${this.apiKey}`)
    .map( response => response.json() as CityWeather);
  }

  /** 
   * Gonna get the ids of Barcelona, Washington and London to use in the near future 
   * @param minutes number of minutes to be executed this method.
   * @param cities the names of the cities to which weathers are going to be brought
   * */
  getCitiesWheathersInterval(minutes: number, cities: Array<string>): Observable<Array<CityWeather>> {
    const observables: Array<Observable<CityWeather>> = cities.map(c => this.getCityWeather(c));
    return Observable.interval(minutes * 60 *1000).switchMap(t => Observable.forkJoin(observables));
  }

  /** 
   * Get the current weathers for the first time 
   * @param cities the names of the cities to which weathers are going to be brought
   * */
  getDefaultCitiesWeather(cities: Array<string>) {
    const promises = cities.map(c => this.getCityWeather(c).toPromise());
    return Promise.all(promises).then(response => response.map(r => r)); 
  }

  getWeatherSource() { return this.weathersSource.asObservable(); }

  /** Sends the new weathers to any subscriber  */
  broadcastNewWeathers(newWeathers: Array<CityWeather>) {
    console.log('Sending new weathers');
    newWeathers.forEach(w => console.log(w));
    this.weathersSource.next(newWeathers);
  }
}
