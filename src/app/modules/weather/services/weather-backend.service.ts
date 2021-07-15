import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherBackendService {
 headers = new HttpHeaders().set('content-type', 'application/json');

  DarkSkyAPIKey = ''; // add your <DarkSky API Key> here
  openCageDataAPIKey = ''; // add your <openCageData API Key> here
  constructor(private _http: HttpClient) { }

  getForecast(latitude, longitude) {
    return this._http.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + this.DarkSkyAPIKey + '/' + latitude + ',' + longitude, { headers: this.headers });
  }

  getLocation(latitude, longitude) {
    return this._http.get('https://api.opencagedata.com/geocode/v1/json?q='+latitude+'%2C+'+longitude+'&key='+this.openCageDataAPIKey);
  }
}
