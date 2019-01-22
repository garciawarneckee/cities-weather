import { TestBed, inject } from '@angular/core/testing';

import { WeatherConverterService } from './weather-converter.service';
import { CityWeatherDTO } from '../model/weather-dto';

describe('WeatherConverterService', () => {

  let dto = new CityWeatherDTO();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherConverterService]
    });

    dto.base = 'base';
    dto.clouds = { all: 99 };
    dto.cod = 1;
    dto.coord = { lat: 13.75, lon: 23.45 };
    dto.dt = 1548195884539;
    dto.id = 2;
    dto.main = {
      temp: 29,
      pressure: 23,
      humidity: 12,
      tempmax: 12,
      tempmin: 17
    }
    dto.name = 'City';
    dto.sys = {
      id: 12,
      country: 'Country',
      message: 12,
      sunrise: new Date(),
      sunset: new Date(),
      type: 34
    }
    dto.visibility = 328754;
    dto.weather = [{
      id: 34,
      icon: 'icon',
      main: 'main',
      description: 'description'
    }]
    dto.wind = {
      deg: 48.45,
      speed: 5
    }
  });

  it('should be created', inject([WeatherConverterService], (service: WeatherConverterService) => {
    expect(service).toBeTruthy();
  }));

  it(
    'should convert dto object into domain object', 
    inject([WeatherConverterService], 
      (service: WeatherConverterService) => {
        const objects = service.convert([dto]);
        const weather = objects[0];
        expect(weather.temp).toBe(29);
        expect(weather.cityName).toBe('City');
        expect(weather.description).toBe('description');
        expect(weather.weatherDate).toEqual(new Date(1548195884539 * 1000));
  }));

  it(
    'should throw an error if there are not objects provided', 
    inject([WeatherConverterService], 
      (service: WeatherConverterService) => {
        expect(function(){ service.convert(null) } ).toThrow(new Error('There are no objects to convert'));
  }));

  it(
    'should throw an error if empty array is provided', 
    inject([WeatherConverterService], 
      (service: WeatherConverterService) => {
        expect(function(){ service.convert([]) } ).toThrow(new Error('There are no objects to convert'));
  }));
});
