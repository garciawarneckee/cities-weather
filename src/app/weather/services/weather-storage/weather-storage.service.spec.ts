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

it( 
  'localStorage should retieve two items when bulk save is called', 
  inject([WeatherStorageService], 
    (service: WeatherStorageService) => {
      const cw1 = new CityWeather('city1', 23, 'desc', 'icon', new Date(), new Date());
      const cw2 = new CityWeather('city1', 23, 'desc', 'icon', new Date(), new Date());
      service.bulkSave([cw1, cw2]);
      const historic = service.getHistoricByCity('city1');
      expect(historic.length).toBe(2);
}));

it( 
    'getHistoricByCity should retieve have the two items for city1', 
    inject([WeatherStorageService], 
      (service: WeatherStorageService) => {
      const cw1 = new CityWeather('city1', 23, 'desc', 'icon', new Date(), new Date());
      const cw2 = new CityWeather('city1', 23, 'desc', 'icon', new Date(), new Date());
      localStorage.setItem('city1', JSON.stringify([cw1, cw2]));
      const historic = service.getHistoricByCity('city1');
      expect(historic.length).toBe(2);
  }));

  it(
    'localStorage should retrieve tree items if getCities is called', 
    inject([WeatherStorageService],
      (service: WeatherStorageService) => {
        localStorage.setItem('city1', 'something');
        localStorage.setItem('city2', 'something');
        localStorage.setItem('city3', 'something');
        const cities = service.getCities();
        expect(cities.length).toBe(3);
        expect(cities[0]).toBe('city1');
        expect(cities[1]).toBe('city2');
        expect(cities[2]).toBe('city3');
    }));


  it(
    'localStorage should have 0 items if clear is called', 
    inject([WeatherStorageService],
      (service: WeatherStorageService) => {
        service.clear();
        expect(localStorage.length).toBe(0);
    }));


});
