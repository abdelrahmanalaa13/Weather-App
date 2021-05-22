import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherBackendService {
 headers = new HttpHeaders().set('content-type', 'application/json');

  DarkSkyAPIKey = ''; // add your <DarkSky API Key> here
  IpInfoToken = '3338fff7538b89';
  constructor(private _http: HttpClient) { }

  getForecast(latitude, longitude) {
    return this._http.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + this.DarkSkyAPIKey + '/' + latitude + ',' + longitude, { headers: this.headers });
  }

  getLocation() {
    return this._http.get('https://ipapi.co/json/');
  }
}
