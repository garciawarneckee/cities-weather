import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherBoardComponent } from './weather-board/weather-board.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
