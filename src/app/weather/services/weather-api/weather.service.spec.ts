import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [WeatherService]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
