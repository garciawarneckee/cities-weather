import { Moment } from "moment";

export default class CityWeather {
  cityName: string;
  temp: number;
  description: string;
  icon: string;
  weahterDate: Moment;
  weatherReceivedDate: Moment;
}