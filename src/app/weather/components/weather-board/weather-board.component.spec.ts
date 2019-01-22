import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBoardComponent } from './weather-board.component';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { WeatherService } from '../../services/weather-api/weather.service';
import { HttpModule } from '@angular/http';
import { WeatherStorageService } from '../../services/weather-storage/weather-storage.service';
import { WeatherConverterService } from '../../services/weather-converter.service';
import CityWeather from '../../model/weather';
import { getElementBySelector } from '../../../utils/testing-utils';
import { Router } from '@angular/router';

describe('WeatherBoardComponent', () => {
  let component: WeatherBoardComponent;
  let fixture: ComponentFixture<WeatherBoardComponent>;
  const expectedWeathers: Array<CityWeather> = [
    new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date()),
    new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date()),
    new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date())
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherBoardComponent, WeatherCardComponent ],
      providers: [ 
        WeatherService, 
        WeatherStorageService, 
        WeatherConverterService,
        { provide: Router , useClass: RouterStub }
      ],
      imports: [ HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBoardComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should renders three weather-cards components', () => {
    component.weathers = expectedWeathers;
    fixture.detectChanges();
    const board = getElementBySelector(fixture, '.board-container');
    const cards = board.querySelectorAll('app-weather-card');
    expect(cards.length).toBe(3);
  })
});

class RouterStub { navigate(url: Array<string>) { return url; } } 
