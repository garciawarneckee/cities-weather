export class CityWeather {
  coord: Coordinates;
  weather: Weather;
  base: String;
  main: TimeIndicators;
  visibility: Number;
  wind: Wind;
  clouds: Clouds;
  dt: Date;
  sys: Sys;
  id: Number;
  name: String;
  cod: Number;
}

class Coordinates {
  lat: Number;
  lon: Number;
}

class Weather {
  id: Number;
  main: String;
  description: String;
  icon: String;
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
  country: String;
  sunrise: Date;
  sunset: Date;
}
