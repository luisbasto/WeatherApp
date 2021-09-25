import { WsWeatherService } from '../ws-weather.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-folder',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  allDataWeather: any;
  main: any = {};
  weather: any = [];
  city: string;

  constructor(private activatedRoute: ActivatedRoute, 
    private wsWeatherService: WsWeatherService,
    private loadingCtrl: LoadingController) { 
  }

  ionViewWillEnter(){
    this.presentLoading();
    this.city = this.activatedRoute.snapshot.paramMap.get('id');

    this.wsWeatherService.getWeather(this.city).subscribe((res: any) => {
     this.allDataWeather = res;
     this.main = this.allDataWeather.main;
     this.weather = this.allDataWeather.weather;
     console.log(this.weather);
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Loading data, please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  refreshData(event){
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  
  ngOnInit() {
    
  }

}
