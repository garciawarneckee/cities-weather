import { TestBed, inject } from '@angular/core/testing';

import { WeatherConverterService } from './weather-converter.service';

describe('WeatherConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherConverterService]
    });
  });

  it('should be created', inject([WeatherConverterService], (service: WeatherConverterService) => {
    expect(service).toBeTruthy();
  }));
});
