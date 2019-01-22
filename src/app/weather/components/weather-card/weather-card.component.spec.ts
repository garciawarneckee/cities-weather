import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCardComponent } from './weather-card.component';
import CityWeather from '../../model/weather';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { getElementBySelector, capitalizeWord } from '../../../utils/testing-utils';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;
  const expectedWeather = new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCardComponent ],
      providers: [ 
        { provide: Router , useClass: RouterStub } 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the right props when weather is provided', () => {
    component.weather = expectedWeather;
    fixture.detectChanges();
    const datePipe = new DatePipe('en-ES');
    const temp = getElementBySelector(fixture, '.card-temp');
    const icon = getElementBySelector(fixture, '.card-icon');
    const city = getElementBySelector(fixture, '.card-city');
    const description = getElementBySelector(fixture, '.card-description'); 
    const timestamp = getElementBySelector(fixture, '.card-timestamp');
    const historicBtn = getElementBySelector(fixture, '.card-historic-button');
    expect(temp.textContent).toContain(expectedWeather.temp.toString());
    expect(icon.getAttribute('src')).toContain(expectedWeather.icon);
    expect(city.textContent).toContain(expectedWeather.cityName);
    expect(description.textContent).toContain(capitalizeWord(expectedWeather.description));
    expect(timestamp.textContent)
      .toContain(datePipe.transform(expectedWeather.weatherDate, 'short'));
    expect(historicBtn).toBeTruthy();
  })

  it('renders nothing when no weather is provided', () => {
    component.weather = null;
    fixture.detectChanges();
    const container = getElementBySelector(fixture, '.card-container');
    expect(container).toBeNull();
  });

});


class RouterStub { navigate(url: Array<string>) { return url; } }