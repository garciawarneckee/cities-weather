export default class CityWeather {

  constructor(cityName?, temp?, description?, icon?, weatherDate?, weatherReceivedDate?) {
    this.cityName = cityName;
    this.temp = temp;
    this.description = description;
    this.icon = icon;
    this.weatherDate = weatherDate;
    this.weatherReceivedDate = weatherReceivedDate;
  }

  cityName: string;
  temp: number;
  description: string;
  icon: string;
  weatherDate: Date;
  weatherReceivedDate: Date;
}