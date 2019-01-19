import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { WeatherService } from './weather/services/weather-api/weather.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule
  ],
  providers: [WeatherService], //This is necessary regarding the component communication.
  bootstrap: [AppComponent]
})
export class AppModule { }
