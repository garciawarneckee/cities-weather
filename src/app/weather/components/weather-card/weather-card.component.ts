import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import CityWeather from "../../model/weather";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.scss"]
})
export class WeatherCardComponent {
  
  constructor(private router: Router) {}

  @Input() weather: CityWeather = null;

  goToHistoric() {
    this.router.navigate([`/weather/${this.weather.cityName}`]);
  }
}
