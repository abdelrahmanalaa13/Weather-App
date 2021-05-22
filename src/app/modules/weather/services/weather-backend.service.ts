import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherBackendService {

  DarkSkyAPIKey = 'a177f8481c31fa96c3f95ad4f4f84610';
  IpInfoToken = '3338fff7538b89';
  constructor(private _http: HttpClient) { }

  getForecast(latitude, longitude) {
    return this._http.get('https://api.darksky.net/forecast/' + this.DarkSkyAPIKey + latitude + ',' + longitude);
  }

  getLocation() {
    return this._http.get('http://ipinfo.io?token=' + this.IpInfoToken);
  }
}
