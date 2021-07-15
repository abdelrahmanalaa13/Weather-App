import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherBackendService {

  DarkSkyAPIKey = ''; // add your <DarkSky API Key> here
  IpInfoToken = '3338fff7538b89';
  constructor(private _http: HttpClient) { }

  getForecast(latitude, longitude) {
    return this._http.get('https://api.darksky.net/forecast/' + this.DarkSkyAPIKey + latitude + ',' + longitude);
  }

  getLocation() {
    return this._http.get('http://ipinfo.io?token=' + this.IpInfoToken);
  }
}
