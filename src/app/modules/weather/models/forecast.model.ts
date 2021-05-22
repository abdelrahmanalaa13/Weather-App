import { ForecastList } from "./forecast-list.model";
import { WeatherDetails } from "./weather-details.model";

export interface Forecast {
    latitude: number;
    longitude: number;
    currently: WeatherDetails;
    hourly: ForecastList;
    daily: ForecastList;
    offset: number;
}
