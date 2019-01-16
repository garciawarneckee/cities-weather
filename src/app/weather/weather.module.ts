import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherBoardComponent } from './components/weather-board/weather-board.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherService } from './services/weather.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    WeatherRoutingModule
  ],
  providers: [WeatherService],
  exports: [WeatherBoardComponent],
  declarations: [WeatherBoardComponent, WeatherCardComponent]
})
export class WeatherModule { }
