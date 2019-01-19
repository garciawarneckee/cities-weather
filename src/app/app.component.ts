import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { WeatherService } from './weather/services/weather-api/weather.service';
import * as moment from 'moment';
import { CityWeather } from './weather/model/weather-dto';

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

  constructor(private router: Router, private weatherService: WeatherService) {  }

  ngOnInit() {
   this.weatherService.getCitiesWheathersInterval(0.2, ['Barcelona', 'Londres', 'Washington'])
      .subscribe(weathers => {
        const now = moment().format('LLL'); ;
        console.log(`Receiving and broadcasting new weathers at ${now}`);
        this.weathers = weathers;
        this.weatherService.broadcastNewWeathers(weathers);
      })
  }


}
