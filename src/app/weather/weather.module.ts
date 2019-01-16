import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherBoardComponent } from './components/weather-board/weather-board.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  exports: [WeatherBoardComponent],
  declarations: [WeatherBoardComponent, WeatherCardComponent]
})
export class WeatherModule { }
