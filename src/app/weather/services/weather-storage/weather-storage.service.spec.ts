import { TestBed, inject } from '@angular/core/testing';

import { WeatherStorageService } from './weather-storage.service';

describe('WeatherStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherStorageService]
    });
  });

  it('should be created', inject([WeatherStorageService], (service: WeatherStorageService) => {
    expect(service).toBeTruthy();
  }));
});
