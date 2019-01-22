import CityWeather from "../../app/weather/model/weather";

export class MockStorageService {
  getMoreRecentWeathers() {
    return [
      new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date()),
      new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date()),
      new CityWeather('city', 15, 'cloudy', 'icon', new Date(), new Date())
    ];
  }
}
