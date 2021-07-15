import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TempScales } from '../../enums/temp-scales.enum';
import { Forecast } from '../../models/forecast.model';
import { WeatherDetails } from '../../models/weather-details.model';

@Component({
  selector: 'app-weather-slider',
  templateUrl: './weather-slider.component.html',
  styleUrls: ['./weather-slider.component.scss'],
})
export class WeatherSliderComponent implements OnInit {
  @Input() isHourly: boolean;
  @Input() details: Forecast; // all available Forecast's details
  @Input() selectedScale: TempScales;
  @Output() sliderModeEmit = new EventEmitter();

  currantTime: Date;

  nearestTime: Date;

  sliderItems: WeatherDetails[];

  constructor() {}

  ngOnInit() {
    this.setSliderItems();
  }
  /**
   * Checking and applying the slider Items based on if it's hourly or daily
   */
  setSliderItems() {
    this.sliderItems = this.isHourly
      ? this.details.hourly.data
      : this.details.daily.data;
  }

  /**
   * 
   * @param hourly boolean for applied type
   * check if changed to make an action
   * binding the boolean to home
   */
  changeSliderMode(hourly) {
    if (hourly !== this.isHourly) {
      this.isHourly = hourly;
      this.sliderModeEmit.emit(hourly);
      this.setSliderItems();
    }
  }
}
