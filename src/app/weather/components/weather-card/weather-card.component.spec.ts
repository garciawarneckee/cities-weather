import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCardComponent } from './weather-card.component';
import CityWeather from '../../model/weather';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;
  let de: DebugElement;
  let el: HTMLElement;
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
    component.weather = expectedWeather;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the right props when weather is provided', () => {
    const expectedTemp = expectedWeather.temp;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.card-temp'));
    el = de.nativeElement;
    expect(el.textContent).toContain(expectedTemp.toString());
  })
});


class RouterStub { navigate(url: Array<string>) { return url; } }