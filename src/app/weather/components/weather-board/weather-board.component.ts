import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CityWeather } from '../../model/weather-dto';
import * as moment from 'moment';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.css']
})
export class WeatherBoardComponent implements OnInit {

  weathers: Array<CityWeather> = null;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    /**Getting weathers for first time */
    this.weatherService.getDefaultCitiesWeather()
      .then(weathers => this.weathers = weathers);

    /** Listening for new weathers for every 3 minutes */  
    this.weatherService.getCitiesWheathersInterval()
    .subscribe(weathers => { {
      const now = moment().format('LLL'); ;
      console.log(`Getting new weathers at + ${now}`);
      this.weathers = weathers;
    } });
  }

}
