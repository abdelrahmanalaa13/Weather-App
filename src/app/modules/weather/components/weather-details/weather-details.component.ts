import { Component, Input, OnInit } from '@angular/core';
import { TempScales } from '../../enums/temp-scales.enum';
import { WeatherDetails } from '../../models/weather-details.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {
  @Input() forecast: WeatherDetails;
  @Input() cityName: string;
  @Input() currentDayDetails: WeatherDetails;
  @Input() selectedScale: TempScales;
  @Input() daySummary: string;
  constructor() {}

  ngOnInit() {
  }
}
