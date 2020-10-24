import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Chart} from 'node_modules/chart.js';

@Component({
  selector: 'app-city-chart',
  templateUrl: './city-chart.component.html',
  styleUrls: ['./city-chart.component.css']
})
export class CityChartComponent implements OnInit {
  chartIds = ['canvasChart1', 'canvasChart2', 'canvasChart3', 'canvasChart4'];
  chartTypes = ['bar', 'radar', 'doughnut', 'polarArea'];
  cityName: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    try {
      this.cityName = history.state.data.cityName;
      for (let i = 0; i < this.chartIds.length; i++) {
        // tslint:disable-next-line:no-unused-expression
        new Chart( this.chartIds[i], {
          type: this.chartTypes[i],

          data: {
            labels: ['confirmed', 'active', 'recovered', 'deaths'],
            datasets: [{
              label: 'Number of Cases',
              data: [history.state.data.confirmedCases,
                history.state.data.activeCases,
                history.state.data.recoveredCases,
                history.state.data.decreased],
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
      }



    } catch (e) {
      this.router.navigate(['']);
    }
  }

}
