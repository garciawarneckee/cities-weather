import { Component, Input, OnInit } from "@angular/core";
import { CityWeather } from "../../model/weather-dto";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.scss"]
})
export class WeatherCardComponent {
  
  private iconUrl = "http://openweathermap.org/img/w/"

  constructor() {}

  @Input() weather: CityWeather = null;



}
