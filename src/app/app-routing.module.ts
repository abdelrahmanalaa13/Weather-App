import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherModule } from './modules/weather/weather.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/weather/weather.module#WeatherModule',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// adding the router module to allow the app to be more scalable