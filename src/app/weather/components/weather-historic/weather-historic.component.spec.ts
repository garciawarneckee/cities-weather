import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { WeatherHistoricComponent } from './weather-historic.component';

import { WeatherStorageService } from '../../services/weather-storage/weather-storage.service';

import CityWeather from '../../model/weather';

import { getElementBySelector } from '../../../utils/testing-utils';
import { MockStorageService } from '../../../../testing/mocks/MockStorageService';

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
        {provide: WeatherStorageService, useClass: MockStorageService} ],
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
    const container = getElementBySelector(fixture, '.historic-container');
    const rows = container.querySelectorAll('.row-weather');
    expect(rows.length).toBe(3);
  });

  it(
    'should renders the empty message when no historic time is provided', 
    inject([WeatherStorageService],
    (storageService: WeatherStorageService) => {
      spyOn(storageService, 'getHistoricByCity').and.returnValue(null);
      component.historic = null;
      fixture.detectChanges();
      const emptyMessage = getElementBySelector(fixture, '.empty-historic')
      const container = getElementBySelector(fixture, '.historic-container');
      expect(container).toBeNull();
      expect(emptyMessage.textContent).toContain('There are not historic weathers to show');
  }));
});
