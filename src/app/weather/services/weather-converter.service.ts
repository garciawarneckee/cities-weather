import { Injectable } from '@angular/core';
import { CityWeatherDTO } from '../model/weather-dto';
import CityWeather from '../model/weather';
import * as moment from 'moment';

@Injectable()
export class WeatherConverterService {

  constructor() { }


  private convertOne(dto: CityWeatherDTO): CityWeather {
    let weather = new CityWeather();
    weather.cityName = dto.name;
    weather.description = dto.weather.description;
    weather.temp = dto.main.temp;
    weather.icon = dto.weather.icon;
    weather.weahterDate =  moment(new Date(dto.dt * 1000));
    weather.weatherReceivedDate = moment();
    return weather;
  }

  convert(dtos: Array<CityWeatherDTO>): Array<CityWeather> {
    return dtos.map(dto => this.convertOne(dto));
  }
}
