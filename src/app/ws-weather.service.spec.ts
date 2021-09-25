import { TestBed } from '@angular/core/testing';

import { WsWeatherService } from './ws-weather.service';

describe('WsWeatherService', () => {
  let service: WsWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
