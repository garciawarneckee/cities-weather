import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { WeatherBoardComponent } from './weather-board.component';
import { WeatherCardComponent } from '../weather-card/weather-card.component';

import { WeatherService } from '../../services/weather-api/weather.service';
import { WeatherStorageService } from '../../services/weather-storage/weather-storage.service';
import { WeatherConverterService } from '../../services/weather-converter.service';

import CityWeather from '../../model/weather';

import { getElementBySelector } from '../../../utils/testing-utils';
import { MockStorageService } from '../../../../testing/mocks/MockStorageService';
import { RouterStub } from '../../../../testing/mocks/RouterStub';

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
        WeatherConverterService, 
        { provide: Router , useClass: RouterStub },
        { provide: WeatherStorageService, useClass: MockStorageService },
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
  });

  it(
    'should display empty weather message when no weathers are provide', 
    inject([WeatherStorageService], 
    (storageService: WeatherStorageService) => {
      spyOn(storageService, 'getMoreRecentWeathers').and.returnValue(null);
      component.weathers = null;
      fixture.detectChanges();
      const board = getElementBySelector(fixture, '.board-container');
      const emptyMessage = getElementBySelector(fixture, '.empty-board');
      expect(board).toBeNull();
      expect(emptyMessage.textContent).toContain('There are not weathers to show');
  }));

});


