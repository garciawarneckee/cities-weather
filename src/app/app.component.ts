import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router"
import { WeatherService } from './weather/services/weather-api/weather.service';
import * as moment from 'moment';
import { CityWeather } from './weather/model/weather-dto';
import { WeatherStorageService } from './weather/services/weather-storage/weather-storage.service';
import { Subscription } from 'rxjs/Subscription';

/** 
 * Has the resposibility to maintain alive the service that updates the weathers every 3 minutes  
 * and updates the board.
 * */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private weathers: Array<CityWeather> = null;
  private subscription: Subscription;

  constructor(
    private router: Router, 
    private weatherService: WeatherService,
    private weatherStorage: WeatherStorageService) {  }

  /** 
   * Calling the weather API every 3 minutes, we need to make it here because the app component 
   * lives while the application is running and it will we be providing the updates to the 
   * board and saving the new weather in the local storage.
   * */
  ngOnInit() {
   this.subscription = this.weatherService.getCitiesWheathersInterval(3, ['Barcelona', 'Londres', 'Washington'])
      .subscribe(weathers => {
        const now = moment().format('LLL'); ;
        console.log(`Receiving and broadcasting new weathers at ${now}`);
        this.weathers = weathers;
        this.weatherService.broadcastNewWeathers(weathers);
        this.weatherStorage.bulkSave(weathers);
      })
  }

  ngOnDestroy() { this.subscription.unsubscribe(); }

}
