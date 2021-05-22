import { Component, OnInit } from '@angular/core';
import { WeatherDetails } from '../../models/weather-details.model';
import { Forecast } from '../../models/forecast.model';
import { forkJoin } from 'rxjs';
import { WeatherBackendService } from '../../services/weather-backend.service';
import { WeatherService } from '../../services/weather.service';

import { TempScales } from '../../enums/temp-scales.enum';
@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
})
export class WeatherHomeComponent implements OnInit {
  latitude: number;
  longitude: number;

  TempScales = TempScales;
  selectedScale = TempScales.fahrenheit;

  isHourly = true;

  forecastDetails: Forecast;
  currantForecast: WeatherDetails;
  currentDay: WeatherDetails;

  currentCity: string;

  constructor(
    private weatherBackendService: WeatherBackendService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getWeatherDetails();
      });
    }
  }

  getWeatherDetails() {
    forkJoin([
      this.weatherBackendService.getForecast(this.latitude, this.longitude),
      // this.weatherBackendService.getLocation(),
    ]).subscribe(([forecast]) => { //, locationDetails
      this.setForecast(forecast);
      // this.setCity(locationDetails);
    });
  }

  setForecast(forecast) {
    this.forecastDetails = forecast;
    this.setCurrantForecast(forecast.currently);
  }

  setCurrantForecast(forecast) {
    this.currantForecast = forecast;
    this.SetForecastRange();
  }

  SetForecastRange() {
    const currentDay = this.weatherService.getCurrentDay(
      this.forecastDetails,
      this.currantForecast.time
    );
    [
      this.currantForecast.temperatureLow,
      this.currantForecast.temperatureHigh,
      this.currantForecast.daySummary,
    ] = [
      currentDay.temperatureLow,
      currentDay.temperatureHigh,
      currentDay.summary,
    ];
    this.forecastDetails.hourly.data[0].temperature =
      this.currantForecast.temperature;
  }

  setCity(locationDetails) {
    this.currentCity = locationDetails.city;
  }

  convertScale(scale) {
    this.selectedScale = scale;
  }

  changeSliderMode(hourly) {
    this.isHourly = hourly;
    this.SetForecastRange();
  }
}
