import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './components/weather-home/weather-home.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherHomeComponent,
  },
  {
    path: '**',
    component: WeatherHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
