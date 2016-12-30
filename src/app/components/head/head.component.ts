import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  animations: [
    trigger('flyInOut', [
      state('hideY', style({
        display: 'none'
      })),
      transition('* => hideY', animate('1000ms ease-out', style({
        height: '0px'
      }))),
      transition('hideY => *', [
        style({height: '0px'}),
        animate('1000ms ease-in', style({
          height: '*'
        })
      )])
    ])
  ]
})
export class HeadComponent implements OnInit {

  toggle: string = 'hideY';

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.toggle = this.toggle === 'hideY' ? 'showY' : 'hideY';
  }

}
