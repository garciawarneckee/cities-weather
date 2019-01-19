import { Component, OnInit, Input } from '@angular/core';
import { CityWeatherDTO } from '../../../model/weather-dto';

@Component({
  selector: 'app-weather-hictoric-row',
  templateUrl: './weather-hictoric-row.component.html',
  styleUrls: ['./weather-hictoric-row.component.scss']
})
export class WeatherHictoricRowComponent implements OnInit {

  @Input() weather: CityWeatherDTO = null;

  constructor() { }

  ngOnInit() {
  }

}
