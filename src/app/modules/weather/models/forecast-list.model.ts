import { WeatherDetails } from "./weather-details.model";

export interface ForecastList {
    summary: string;
    icon: string;
    data: WeatherDetails[];
}
