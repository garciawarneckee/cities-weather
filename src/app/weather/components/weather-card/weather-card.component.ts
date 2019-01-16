import { Component, Input, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
import { CityWeather } from "../../model/weather-dto";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.css"],
  providers: [WeatherService]
})
export class WeatherCardComponent {
  constructor(private weatherService: WeatherService) {}

  @Input() weather: CityWeather = null;

}
