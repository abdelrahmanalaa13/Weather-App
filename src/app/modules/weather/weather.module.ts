import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherHomeComponent } from './components/weather-home/weather-home.component';
import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  declarations: [WeatherHomeComponent],
  imports: [CommonModule, WeatherRoutingModule],
})
export class WeatherModule {}
