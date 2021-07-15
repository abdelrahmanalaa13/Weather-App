import { Component, Input, OnInit } from '@angular/core';
import { TempScales } from '../../enums/temp-scales.enum';
import { WeatherDetails } from '../../models/weather-details.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {
  @Input() forecast: WeatherDetails; // today's forecast
  @Input() cityName: string;
  @Input() selectedScale: TempScales;
  @Input() daySummary: string; // full day summary
  constructor() {}

  ngOnInit() {
  }
}
