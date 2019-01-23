import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { WeatherService } from './weather/services/weather-api/weather.service';
import { WeatherStorageService } from './weather/services/weather-storage/weather-storage.service';
import { WeatherConverterService } from './weather/services/weather-converter/weather-converter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule
  ],
  providers: [WeatherService, WeatherStorageService, WeatherConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
