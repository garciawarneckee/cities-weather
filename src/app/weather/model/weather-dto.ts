export class CityWeatherDTO {
  coord: Coordinates;
  weather: Array<Weather>;
  base: string;
  main: TimeIndicators;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}

class Coordinates {
  lat: number;
  lon: number;
}

class Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

class TimeIndicators {
  temp: number;
  pressure: number;
  humidity: number;
  tempmin: number;
  tempmax: number;
}

class Wind {
  speed: number;
  deg: number;
}

class Clouds {
  all: number;
}

class Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: Date;
  sunset: Date;
}
