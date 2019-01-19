import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../services/weather-api//weather.service';
import { CityWeather } from '../../model/weather-dto';
import * as moment from 'moment';
import { WeatherStorageService } from '../../services/weather-storage/weather-storage.service';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.css']
})
export class WeatherBoardComponent implements OnInit {

  weathers: Array<CityWeather> = null;

  constructor(private weatherService: WeatherService, 
    private weatherStorage: WeatherStorageService) { 
      weatherService.getWeatherSource()
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

}
