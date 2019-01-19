import { Component, Input, OnInit } from "@angular/core";
import { CityWeatherDTO } from "../../model/weather-dto";
import { Router } from "@angular/router";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.scss"]
})
export class WeatherCardComponent {
  
  constructor(private router: Router) {}

  @Input() weather: CityWeatherDTO = null;

  goToHistoric() {
    this.router.navigate([`/weather/${this.weather.name}`]);
  }
}
