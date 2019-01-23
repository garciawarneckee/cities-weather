import { Component, OnInit } from '@angular/core';
import { WeatherStorageService } from '../../services/weather-storage/weather-storage.service';
import { ActivatedRoute } from '@angular/router';
import CityWeather from '../../model/weather';

@Component({
  selector: 'app-weather-historic',
  templateUrl: './weather-historic.component.html',
  styleUrls: ['./weather-historic.component.scss']
})
export class WeatherHistoricComponent implements OnInit {

  private cityName = this.route.snapshot.params["name"];
  historic: Array<CityWeather> = null;

  constructor(private route: ActivatedRoute, private weatherStorage: WeatherStorageService) { }

  ngOnInit() {
    this.historic = this.weatherStorage.getHistoricByCity(this.cityName);
  }

}
