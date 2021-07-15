import { Component, OnInit } from '@angular/core';
import { WeatherDetails } from '../../models/weather-details.model';
import { Forecast } from '../../models/forecast.model';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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

  forecastDetails: Forecast; // full weather available details
  currantForecast: WeatherDetails; // currant Forecast by time
  currentDay: WeatherDetails; // today's full Forecast data

  currentCity: string; // city name

  constructor(
    private weatherBackendService: WeatherBackendService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.getLocation();
  }

  /**
   * get the Current location coordinates (latitude, longitude) 
   * check if not available to get the position, notify the user 
   */
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (!position) {
          alert("Couldn't get your location");
          return;
        }
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getWeatherDetails();
      });
    }
  }

  /**
   * Request Forecast Data and the location data
   * catch error used in this case to avoid forkJoin crashing
   * forkJoin used get the full data at the same time
   * checking if have any error
   */
  getWeatherDetails() {
    const getForecast = this.weatherBackendService
      .getForecast(this.latitude, this.longitude)
      .pipe(catchError((error) => of(error)));

    const getLocation = this.weatherBackendService
      .getLocation(this.latitude, this.longitude)
      .pipe(catchError((error) => of(error)));

    forkJoin([getForecast, getLocation]).subscribe(
      ([forecast, locationDetails]) => {
        this.setForecast(forecast);
        this.setCity(locationDetails);
      },
      (error) => console.error(error)
    );
  }

  /**
   * 
   * @param forecast : the data that returned from the backend
   */
  setForecast(forecast) {
    if (!forecast.currently) {
      alert("Couldn't get the forecast data");
      return;
    }
    this.forecastDetails = forecast;
    this.setCurrantForecast(forecast.currently);
  }

  /**
   * 
   * @param forecast is the current time data for the moment
   */
  setCurrantForecast(forecast) {
    this.currantForecast = forecast;
    this.SetForecastRange();
  }

  /**
   * Getting the Current Day from the Daily forecast list to use it's data
   * setting the day lowest, highest temperature and the full day Summary
   * setting the first element of the hourly list to be now
   */
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

  /**
   * 
   * @param locationDetails the full location details
   * setting city from the results of the locationDetails
   */
  setCity(locationDetails) {
    if (!locationDetails.results || !locationDetails.results[0].components.city) {
      alert("Couldn't get the your City's Name");
      return;
    }
    this.currentCity = locationDetails.results[0].components.city;
  }
  /**
   * 
   * @param scale is the selected scale type to be switched to 
   */
  convertScale(scale) {
    this.selectedScale = scale;
  }

  /**
   * 
   * @param hourly boolean to toggle and change the slider list
   */
  changeSliderMode(hourly) {
    this.isHourly = hourly;
    this.SetForecastRange();
  }
}
