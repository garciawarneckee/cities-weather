import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { WeatherService } from '../../services/weather-api//weather.service';
import { WeatherStorageService } from '../../services/weather-storage/weather-storage.service';
import { Subscription } from 'rxjs/Subscription';
import CityWeather from '../../model/weather';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss']
})
export class WeatherBoardComponent implements OnInit {

  weathers: Array<CityWeather> = null;
  subscription: Subscription;

  constructor(
    private weatherService: WeatherService, 
    private weatherStorage: WeatherStorageService) { 
      this.subscription = this.weatherService
        .getWeatherSource()
        .subscribe( weathers => { this.weathers = weathers; });
    }
  
  /**Getting weathers for first time */
  ngOnInit() {
    this.weathers = this.weatherStorage
      .getMostRecentWeathers(this.weatherStorage.getCities());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
