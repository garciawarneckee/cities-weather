import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCardComponent } from './weather-card.component';
import CityWeather from '../../model/weather';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

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
    const temp = getElementBySelector('.card-temp');
    const icon = getElementBySelector('.card-icon');
    const city = getElementBySelector('.card-city');
    const description = getElementBySelector('.card-description'); 
    const timestamp = getElementBySelector('.card-timestamp');
    const historicBtn = getElementBySelector('.card-historic-button');
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
    const container = getElementBySelector('.card-container');
    expect(container).toBeNull();
  });

  /** Returns the element which content will be evaluated */
  function getElementBySelector(className: string): HTMLElement {
    const de = fixture.debugElement.query(By.css(className))
    return de && de.nativeElement;
  }

  /**
   * TODO:// move it to a util class. 
   * Return the word capitalized in the first letter */
  function capitalizeWord(word: string) {
    return word && word[0].toUpperCase() + word.slice(1);
  }

});


class RouterStub { navigate(url: Array<string>) { return url; } }