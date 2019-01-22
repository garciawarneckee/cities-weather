import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { WeatherHistoricComponent } from './weather-historic.component';

import { WeatherStorageService } from '../../services/weather-storage/weather-storage.service';

import CityWeather from '../../model/weather';

import { getElementBySelector } from '../../../utils/testing-utils';

describe('WeatherHistoricComponent', () => {
  let component: WeatherHistoricComponent;
  let fixture: ComponentFixture<WeatherHistoricComponent>;
  const expectedWeathers: Array<CityWeather> = [
    new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date()),
    new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date()),
    new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date())
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ 
        { provide: ActivatedRoute, 
          useValue: { snapshot: { params: { name: 'aName' } } }
        }, 
        WeatherStorageService ],
      declarations: [ WeatherHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should renders three rows', () => {
    component.historic = expectedWeathers;
    fixture.detectChanges();
    const board = getElementBySelector(fixture, '.historic-container');
    const rows = board.querySelectorAll('.row-weather');
    expect(rows.length).toBe(3);
  });
});
