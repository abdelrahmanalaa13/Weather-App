import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TempScales } from '../../enums/temp-scales.enum';

@Component({
  selector: 'app-weather-header',
  templateUrl: './weather-header.component.html',
  styleUrls: ['./weather-header.component.scss']
})
export class WeatherHeaderComponent implements OnInit {
  @Input() selectedScale: TempScales;
  @Output() changeSelectedScale = new EventEmitter();
  TempScales = TempScales;
  constructor() { }

  ngOnInit() {
  }

  changeScale(scale: TempScales) {
    if (this.selectedScale !== scale) {
      this.changeSelectedScale.emit(scale);
    }
  }

}
