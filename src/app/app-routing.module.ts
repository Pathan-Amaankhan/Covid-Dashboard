import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListOfPlacesComponent} from './main-components/list-of-places/list-of-places.component';
import {ListOfCitiesComponent} from './main-components/list-of-cities/list-of-cities.component';
import {CityChartComponent} from './main-components/city-chart/city-chart.component';

const routes: Routes = [
  { path: '', component: ListOfPlacesComponent },
  { path: 'cities', component: ListOfCitiesComponent },
  { path: 'city-chart', component: CityChartComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
