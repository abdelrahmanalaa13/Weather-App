import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherHomeComponent } from './components/weather-home/weather-home.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherHeaderComponent } from './components/weather-header/weather-header.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherSliderComponent } from './components/weather-slider/weather-slider.component';
import { ScaleConvertorPipe } from './pipes/scale-convertor.pipe';

@NgModule({
  declarations: [
    WeatherHomeComponent,
    WeatherHeaderComponent,
    WeatherDetailsComponent,
    WeatherSliderComponent,
    ScaleConvertorPipe,
  ],
  imports: [CommonModule, WeatherRoutingModule],
})
export class WeatherModule {}
