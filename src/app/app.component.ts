import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Merida', url: '/weather/Merida', icon: 'location' },
    { title: 'Washington', url: '/weather/Washington', icon: 'location' },
    { title: 'Paris', url: '/weather/Paris', icon: 'location' },
    { title: 'Madrid', url: '/weather/Madrid', icon: 'location' },
    { title: 'Brazilia', url: '/weather/Brazilia', icon: 'location' },
  ];
  
  constructor() {

  }

}
