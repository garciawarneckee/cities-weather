import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherBoardComponent } from './components/weather-board/weather-board.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherService } from './services/weather-api/weather.service';
import { WeatherStorageService } from './services/weather-storage/weather-storage.service';
import { WeatherHistoricComponent } from './components/weather-historic/weather-historic.component';
import { WeatherHictoricRowComponent } from './components/weather-historic/weather-hictoric-row/weather-hictoric-row.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    WeatherRoutingModule
  ],
  providers: [WeatherStorageService],
  exports: [WeatherBoardComponent],
  declarations: [
    WeatherBoardComponent, 
    WeatherCardComponent, 
    WeatherHistoricComponent, 
    WeatherHictoricRowComponent]
})
export class WeatherModule { }
