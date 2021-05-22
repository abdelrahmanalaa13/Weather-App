import { Injectable } from '@angular/core';
import { TempScales } from '../enums/temp-scales.enum';
import { ForecastList } from '../models/forecast-list.model';
import { Forecast } from '../models/forecast.model';
import { WeatherDetails } from '../models/weather-details.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}

  toggleTempType(selectedScale: TempScales, temp: number) {
    return selectedScale === TempScales.fahrenheit
      ? this.convertCelsiusToFahrenheit(temp)
      : this.convertFahrenheitToCelsius(temp);
  }

  convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
  }

  convertCelsiusToFahrenheit(Celsius) {
    return Celsius * 1.8 + 32;
  }

  getCurrentDay(forecastDetails: Forecast, selectedTime) {
    return forecastDetails.daily.data.find(day => (new Date(day.time * 1000)).getDate() === (new Date(selectedTime * 1000)).getDate())
  }

}
