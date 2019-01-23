import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router"
import { WeatherService } from './weather/services/weather-api/weather.service';
import { WeatherStorageService } from './weather/services/weather-storage/weather-storage.service';
import { Subscription } from 'rxjs/Subscription';
import { WeatherConverterService } from './weather/services/weather-converter/weather-converter.service';

import CityWeather from './weather/model/weather';

/** 
 * Has the resposibility to maintain alive the service that updates the weathers every 3 minutes  
 * and updates the board.
 * */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private weathers: Array<CityWeather> = null;
  private subscription: Subscription;

  constructor(
    private router: Router, 
    private weatherService: WeatherService,
    private weatherStorage: WeatherStorageService,
    private weatherConverter: WeatherConverterService) {  }

  /** 
   * Calling the weather API every 3 minutes, we need to make it here because the app component 
   * lives while the application is running and it will we be providing the updates to the 
   * board and saving the new weather in the local storage.
   * */
  ngOnInit() {
    this.weatherStorage.clear();
    this.subscription = this.weatherService
      .getCitiesWheathersInterval(3, ['Barcelona', 'London', 'Washington'])
      .subscribe(weathers => {
        this.weathers = this.weatherConverter.convert(weathers);
        this.weatherService.broadcastNewWeathers(this.weathers);
        this.weatherStorage.bulkSave(this.weathers);
      });
  }

  ngOnDestroy() { 
    this.weatherStorage.clear();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
