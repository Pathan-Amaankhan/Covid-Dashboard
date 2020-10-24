import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Chart} from 'node_modules/chart.js';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-of-cities',
  templateUrl: './list-of-cities.component.html',
  styleUrls: ['./list-of-cities.component.css']
})
export class ListOfCitiesComponent implements OnInit {
  cities;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    try {
      this.http.get('https://api.covid19india.org/state_district_wise.json').subscribe(data => {
        this.cities = data[history.state.data.stateName].districtData;
      });

      const myChart = new Chart( 'myCityCharts', {
        type: 'pie',

        data: {
          labels: ['confirmed', 'active', 'recovered', 'deaths'],
          datasets: [{
            label: 'Number of Cases',
            data: [history.state.data.confirmedCases,
              history.state.data.activeCases,
              history.state.data.recoveredCases,
              history.state.data.deaths],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 2,
            fill: false
          }]
        },

        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          animation: {
            duration: 1000,
            easing: 'linear'
          },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    } catch (e) {
      this.router.navigate(['']);
    }
  }


  showCityChart = (ctName: string, recovered: number, deceased: number, confirmed: number, active: number) => {
    this.router.navigate(['city-chart'], {
      state: {
        data: {
          cityName: ctName,
          confirmedCases: confirmed,
          activeCases: active,
          recoveredCases: recovered,
          decreased: deceased
        }
      }
    });
  }
}
