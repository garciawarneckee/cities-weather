import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { WeatherService } from '../../services/weather-api//weather.service';
import { CityWeather } from '../../model/weather-dto';
import * as moment from 'moment';
import { WeatherStorageService } from '../../services/weather-storage/weather-storage.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss']
})
export class WeatherBoardComponent implements OnInit {

  weathers: Array<CityWeather> = null;
  subscription: Subscription;

  constructor(private weatherService: WeatherService, 
    private weatherStorage: WeatherStorageService) { 
      this.subscription = weatherService
        .getWeatherSource()
        .subscribe( weathers => { this.weathers = weathers; })
    }
  
  /**Getting weathers for first time */
  ngOnInit() {
    this.weatherService
    .getDefaultCitiesWeather(['Barcelona', 'Londres', 'Washington'])
    .then(weathers => { 
      this.weathers = weathers;
      this.weatherStorage.bulkSave(weathers);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
