import { TestBed, inject } from '@angular/core/testing';

import { WeatherStorageService } from './weather-storage.service';
import CityWeather from '../../model/weather';

describe('WeatherStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherStorageService]
    });
  });

  //afterEach( () => localStorage.clear() )

  it( 'should be created', 
      inject([WeatherStorageService], 
        (service: WeatherStorageService) => {
          expect(service).toBeTruthy();
  }));

  /* it( 'should save a city weather', 
      inject([WeatherStorageService], 
        (service: WeatherStorageService) => {
          let weather = new CityWeather('city', 23, 'desc', 'icon', new Date(), new Date());
          service.save(weather);
          const savedWeather = service.getHistoricByCity('city');
          expect(savedWeather.length).toBe(1);
          expect(savedWeather[0]).toEqual(weather);
  })); */
});
