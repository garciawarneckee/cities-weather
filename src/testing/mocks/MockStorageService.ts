import CityWeather from "../../app/weather/model/weather";

export class MockStorageService {
  getMoreRecentWeathers() {
    return [
      new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date()),
      new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date()),
      new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date())
    ];
  }

  getHistoricByCity(cityName: string) {
    return [
      new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date()),
      new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date()),
      new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date())
    ];
  }

  getCities() {
    return ['City1', 'City2', 'City3'];
  }
}
