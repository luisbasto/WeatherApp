import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WsWeatherService {

  constructor(private http: HttpClient) { 
    console.log("Service activated");
  }

  getWeather(city){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=968750801caaed07a4741ff9dd611f2b")
        .pipe(
          map((res:any) => {
            return res;
          })
        )
  }

}
