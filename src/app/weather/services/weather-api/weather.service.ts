import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from './../../../../environments/environment';

import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/toPromise';

import CityWeather from '../../model/weather';
import { CityWeatherDTO } from '../../model/weather-dto';

@Injectable()
export class WeatherService {

  private apiUrl: String = environment.weatherApiUrl;
  private apiKey: String = environment.weatherApiKey;

  private weathersSource = new Subject<Array<CityWeather>>();

  constructor(private http: Http) {}

  /**
   * Returns the weather of the city.
   * @param cityName name of the city which its weather is going to be requested 
   */
  getCityWeatherDTO(cityName: String): Observable<CityWeatherDTO> {
    return this.http
    .get(`${this.apiUrl}?q=${cityName}&units=metric&APPID=${this.apiKey}`)
    .map( response => response.json() as CityWeatherDTO);
  }

  /** 
   * Gonna get the ids of Barcelona, Washington and London to use in the near future 
   * @param minutes number of minutes to be executed this method.
   * @param cities the names of the cities to which weathers are going to be brought
   * */
  getCitiesWheathersInterval(minutes: number, cities: Array<string>): Observable<Array<CityWeatherDTO>> {
    const observables: Array<Observable<CityWeatherDTO>> = cities.map(c => this.getCityWeatherDTO(c));
    return Observable.interval(minutes * 60 *1000)
    .startWith(0)
    .switchMap(t => Observable.forkJoin(observables));
  }

  /** 
   * Get the current weathers for the first time 
   * @param cities the names of the cities to which weathers are going to be brought
   * */
  getDefaultCitiesWeather(cities: Array<string>) {
    const promises = cities.map(c => this.getCityWeatherDTO(c).toPromise());
    return Promise.all(promises).then(response => response.map(r => r)); 
  }

  getWeatherSource() { return this.weathersSource.asObservable(); }

  /** Sends the new weathers to any subscriber  */
  broadcastNewWeathers(newWeathers: Array<CityWeather>) {
    this.weathersSource.next(newWeathers);
  }
}
