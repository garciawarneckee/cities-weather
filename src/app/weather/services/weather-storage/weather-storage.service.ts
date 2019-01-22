import { Injectable } from '@angular/core';
import CityWeather from '../../model/weather';

/**
 * Responsible to store the weather in roder to provide a historic of them by city.
 * 
 * POSSIBLE IMPROVEMENTS: Define an interface which define the common behavior of all storages.
 */

@Injectable()
export class WeatherStorageService {

  constructor() { }

  /**
   * First checks if the historical city weather exists. If it's not save the new object as an 
   * array using the city name as key. Else, gets the historical object, 
   * append it to the historic object, removes the previous one and the updated historical object.
   * @param weather the new weather to save
   */
  save(weather: CityWeather): void {
    const cityName = weather.cityName;
    const storedWeather = localStorage.getItem(cityName);
    if(!storedWeather) {
      localStorage.setItem(cityName, JSON.stringify([weather]))
    } else {
      const weatherArr = JSON.parse(storedWeather);
      const appendedWeather = [weather, ...weatherArr];
      localStorage.removeItem(cityName);
      localStorage.setItem(cityName, JSON.stringify(appendedWeather));
    }
  }

  /** Returns an array with the most recent weathers of the provided cities */
  getMostRecentWeathers(weatherKeys: Array<string>): Array<CityWeather> {
    if(weatherKeys.length === 0) return [];
    return weatherKeys.map(wk => this.getHistoricByCity(wk)[0]);
  }

  /** Execute the save function over all of the weathers passed as argument */
  bulkSave(weathers: Array<CityWeather>): void { weathers.forEach( w => this.save(w) ); }

  /** Return the historical weather obejct by the name of the city */
  getHistoricByCity(city: string): Array<CityWeather>  {
    const historical = localStorage.getItem(city);
    if(!historical) throw new Error(`There is not historical weather for city`);
    return JSON.parse(historical) as Array<CityWeather>;
  }

  /** Return the name of the cities which are saved in localStorage */
  getCities() { 
    return Object.keys(localStorage) && [];
  }

  clear() { localStorage.clear(); }

}
