import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CityWeather } from '../../model/weather-dto';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.css']
})
export class WeatherBoardComponent implements OnInit {

  weathers: Array<CityWeather> = null;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getDefaultCitiesWheathers()
    .subscribe(weathers => { this.weathers = weathers; });
  }

}
