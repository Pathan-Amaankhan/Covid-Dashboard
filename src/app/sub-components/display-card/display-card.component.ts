import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {
  @Input('state-name') stName: string;
  @Input('confirmed-cases') confCases: number;
  @Input('active-cases') actCases: number;
  @Input('recovered-cases') recvCases: number;
  @Input('deaths') deaths;
  @Input('decreased') decrease;
  @Input('backgroundColor') bgColor = '#7395AE';
  constructor() { }

  ngOnInit(): void {
  }

}
