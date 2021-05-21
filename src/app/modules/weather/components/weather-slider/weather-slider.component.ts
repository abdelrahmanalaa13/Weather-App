import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-slider',
  templateUrl: './weather-slider.component.html',
  styleUrls: ['./weather-slider.component.scss']
})
export class WeatherSliderComponent implements OnInit {
  sliderItems = [];
  constructor() { }

  ngOnInit() {
    this.sliderItems.length = 20;
  }

}
