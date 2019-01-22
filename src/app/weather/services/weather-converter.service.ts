import { Injectable } from '@angular/core';
import { CityWeatherDTO } from '../model/weather-dto';
import CityWeather from '../model/weather';


@Injectable()
export class WeatherConverterService {

  constructor() { }


  private convertOne(dto: CityWeatherDTO): CityWeather {
    let weather = new CityWeather();
    weather.cityName = dto.name;
    weather.description = dto.weather[0].description;
    weather.temp = Math.round(dto.main.temp);
    weather.icon = dto.weather[0].icon;
    weather.weatherDate =  new Date(dto.dt * 1000);
    weather.weatherReceivedDate = new Date();
    return weather;
  }

  convert(dtos: Array<CityWeatherDTO>): Array<CityWeather> {
    if(!dtos || dtos.length === 0) {
      throw new Error('There are no objects to convert');
    } else {
      return dtos.map(dto => this.convertOne(dto));
    }
    
  }
}
