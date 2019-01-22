import { TestBed, inject } from '@angular/core/testing';

import { WeatherStorageService } from './weather-storage.service';
import CityWeather from '../../model/weather';

describe('WeatherStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherStorageService]
    });
  });

  afterEach( () => localStorage.clear() )

  it( 'should be created', 
      inject([WeatherStorageService], 
        (service: WeatherStorageService) => {
          expect(service).toBeTruthy();
  }));

  it( 'should save a city weather', 
      inject([WeatherStorageService], 
        (service: WeatherStorageService) => {
          let weather: CityWeather = new CityWeather('city', 23, 'desc', 'icon', new Date(), new Date());
          service.save(weather);
          const savedWeathers = service.getHistoricByCity('city');
          const sWeather = savedWeathers[0];
          expect(savedWeathers.length).toBe(1);
          expect(sWeather.cityName).toBe(weather.cityName);
          expect(sWeather.description).toBe(weather.description);
          expect(sWeather.icon).toBe(weather.icon);
          expect(sWeather.temp).toBe(weather.temp);
  }));

  it( 'should retieve the most recent weather for each city provided (2)', 
  inject([WeatherStorageService], 
    (service: WeatherStorageService) => {
      spyOn(service, 'getHistoricByCity').and.returnValue([
        new CityWeather('city', 23, 'desc', 'icon', new Date(), new Date()),
        new CityWeather('city2', 23, 'desc', 'icon', new Date(), new Date()),
        new CityWeather('city', 23, 'desc', 'icon', new Date(), new Date())
      ]);
      const historic = service.getMostRecentWeathers(['city', 'city2']);
      expect(historic.length).toBe(2);
  }));

  it( 'getMostRecentWeather should retieve empty array when an empty array is provided ', 
  inject([WeatherStorageService], 
    (service: WeatherStorageService) => {
      spyOn(service, 'getHistoricByCity').and.returnValue([
        new CityWeather('city', 23, 'desc', 'icon', new Date(), new Date()),
        new CityWeather('city2', 23, 'desc', 'icon', new Date(), new Date()),
        new CityWeather('city', 23, 'desc', 'icon', new Date(), new Date())
      ]);
      const historic = service.getMostRecentWeathers(new Array());
      expect(historic).toEqual([]);
}));


});
