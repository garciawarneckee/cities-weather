import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCardComponent } from './weather-card.component';
import CityWeather from '../../model/weather';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

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
    fixture.detectChanges();
    component.weather = expectedWeather;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the right props when weather is provided', () => {
    const expectedTemp = expectedWeather.temp;
    const selector = fixture.debugElement.query(By.css('.card-temp'));
    const el = selector.nativeElement;
    expect(el.textContent).toContain(expectedTemp);
  })
});


class RouterStub { navigate(url: Array<string>) { return url; } }