import { Moment } from "moment";

export default class CityWeather {
  cityName: string;
  temp: Number;
  description: string;
  icon: string;
  weahterDate: Moment;
  weatherReceivedDate: Moment;
}