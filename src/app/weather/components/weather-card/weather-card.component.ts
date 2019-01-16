import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
import { CityWeather } from "../../model/weather-dto";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.css"],
  providers: [WeatherService]
})
export class WeatherCardComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  cityWeather: CityWeather = null;

  getBarcelonaWeather() {
    this.weatherService
      .getCityWeather("Barcelona")
      .then(city => { this.cityWeather = city; });
  }

  ngOnInit(): void {
    this.getBarcelonaWeather();
  }
}
