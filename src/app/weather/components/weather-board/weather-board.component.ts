import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../services/weather-api//weather.service';
import { CityWeather } from '../../model/weather-dto';
import * as moment from 'moment';
import { WeatherStorageService } from '../../services/weather-storage/weather-storage.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.css']
})
export class WeatherBoardComponent implements OnInit {

  weathers: Array<CityWeather> = null;
  subscription: Subscription;

  constructor(private weatherService: WeatherService, 
    private weatherStorage: WeatherStorageService) { 
      weatherService.getWeatherSource()
        .subscribe( weathers => {
          console.log(`Receiving from providers`);
          this.weathers = weathers;
          weatherStorage.bulkSave(weathers);
        })
    }

  ngOnInit() {
    /**Getting weathers for first time */
    this.weatherService
    .getDefaultCitiesWeather(['Barcelona', 'Londres', 'Washington'])
    .then(weathers => { 
      this.weathers = weathers;
      this.weatherStorage.bulkSave(weathers);
    });

    /** Listening for new weathers for every 3 minutes */  
     /** this.weatherService.getCitiesWheathersInterval(3, ['Barcelona', 'Londres', 'Washington'])
    .subscribe(weathers => { {
      const now = moment().format('LLL'); ;
      console.log(`Getting new weathers at + ${now}`);
      this.weathers = weathers;
      this.weatherStorage.bulkSave(weathers);
    } }); */


  }



}
