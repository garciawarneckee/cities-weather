import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBoardComponent } from './weather-board.component';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { WeatherService } from '../../services/weather-api/weather.service';
import { HttpModule } from '@angular/http';
import { WeatherStorageService } from '../../services/weather-storage/weather-storage.service';
import { WeatherConverterService } from '../../services/weather-converter.service';

describe('WeatherBoardComponent', () => {
  let component: WeatherBoardComponent;
  let fixture: ComponentFixture<WeatherBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherBoardComponent, WeatherCardComponent ],
      providers: [ WeatherService, WeatherStorageService, WeatherConverterService ],
      imports: [ HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
