import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-list-of-places',
  templateUrl: './list-of-places.component.html',
  styleUrls: ['./list-of-places.component.css']
})
export class ListOfPlacesComponent implements OnInit {
  states;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('https://api.covid19india.org/data.json').subscribe(data => {
      this.states = data['statewise'];

      const myChart = new Chart( 'myChart', {
        type: 'line',

        data: {
          labels: ['confirmed', 'active', 'recovered', 'deaths'],
          datasets: [{
            label: 'Number of Cases',
            data: [this.states[0].confirmed, this.states[0].active, this.states[0].recovered, this.states[0].deaths],
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


    });
  }

  gotToCities = (stName: string, active: number, confirm: number, dths: number, recovered: number) => {
    this.router.navigate(['cities'], {
      state: {
        data: {
          stateName: stName,
          confirmedCases: confirm,
          activeCases: active,
          recoveredCases: recovered,
          deaths: dths
          }
      }
    });
  }

}
