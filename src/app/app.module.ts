import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListOfPlacesComponent } from './main-components/list-of-places/list-of-places.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { DisplayCardComponent } from './sub-components/display-card/display-card.component';
import { ListOfCitiesComponent } from './main-components/list-of-cities/list-of-cities.component';
import { CityChartComponent } from './main-components/city-chart/city-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfPlacesComponent,
    DisplayCardComponent,
    ListOfCitiesComponent,
    CityChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
