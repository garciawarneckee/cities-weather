import { Component, OnInit } from '@angular/core';
import { WeatherStorageService } from '../../services/weather-storage/weather-storage.service';
import { CityWeather } from '../../model/weather-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-historic',
  templateUrl: './weather-historic.component.html',
  styleUrls: ['./weather-historic.component.scss']
})
export class WeatherHistoricComponent implements OnInit {

  private historic: Array<CityWeather> = null;

  constructor(private route: ActivatedRoute, private weatherStorage: WeatherStorageService) { }

  ngOnInit() {
    const cityName = this.route.snapshot.params["name"];
    this.historic = this.weatherStorage.getHistoricByCity(cityName);
  }

}
