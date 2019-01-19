export class CityWeatherDTO {
  coord: Coordinates;
  weather: Weather;
  base: string;
  main: TimeIndicators;
  visibility: Number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: Number;
  name: string;
  cod: Number;
}

class Coordinates {
  lat: Number;
  lon: Number;
}

class Weather {
  id: Number;
  main: string;
  description: string;
  icon: string;
}

class TimeIndicators {
  temp: Number;
  pressure: Number;
  humidity: Number;
  tempmin: Number;
  tempmax: Number;
}

class Wind {
  speed: Number;
  deg: Number;
}

class Clouds {
  all: Number;
}

class Sys {
  type: Number;
  id: Number;
  message: Number;
  country: string;
  sunrise: Date;
  sunset: Date;
}
