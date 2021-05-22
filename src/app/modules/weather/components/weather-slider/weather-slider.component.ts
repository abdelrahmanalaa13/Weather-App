import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TempScales } from '../../enums/temp-scales.enum';
import { Forecast } from '../../models/forecast.model';
import { WeatherDetails } from '../../models/weather-details.model';

@Component({
  selector: 'app-weather-slider',
  templateUrl: './weather-slider.component.html',
  styleUrls: ['./weather-slider.component.scss']
})
export class WeatherSliderComponent implements OnInit {
  @Input() isHourly: boolean;
  @Input() details: Forecast;
  @Input() selectedScale: TempScales;
  @Output() sliderModeEmit = new EventEmitter();

  currantTime: Date;

  nearestTime: Date;

  sliderItems: WeatherDetails[];

  constructor() { }

  ngOnInit() {
    this.setStartTime();
    this.setSliderItems();
  }

  setStartTime() {
    const currantTime = new Date(this.details.currently.time*1000);
    if(this.isHourly){
      currantTime.setHours(currantTime.getHours() + Math.round(currantTime.getMinutes()/60));
      currantTime.setMinutes(0, 0, 0);
    } else {
      currantTime.setHours(0, 0, 0, 0)
    }
    this.nearestTime = currantTime;
    
    
  }

  setSliderItems() {
    this.sliderItems = this.isHourly ? this.details.hourly.data : this.details.daily.data;
  }

  changeSliderMode(hourly) {
    if(hourly !== this.isHourly){
      this.isHourly = hourly;
      this.sliderModeEmit.emit(hourly);
      this.setStartTime();
      this.setSliderItems();
    }
  }
}
