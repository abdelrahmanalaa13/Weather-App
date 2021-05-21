import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherHomeComponent } from './components/weather-home/weather-home.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherHeaderComponent } from './components/weather-header/weather-header.component';

@NgModule({
  declarations: [WeatherHomeComponent, WeatherHeaderComponent],
  imports: [CommonModule, WeatherRoutingModule],
})
export class WeatherModule {}
