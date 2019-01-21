import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherBoardComponent } from './components/weather-board/weather-board.component';
import { WeatherHistoricComponent } from './components/weather-historic/weather-historic.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherBoardComponent
  },
  {
    path: ':name',
    component: WeatherHistoricComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
