import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  animations: [
    trigger('flyInOut', [
      state('hideY', style({
        display: 'none'  //  Apply style After anim end
      })),
      transition('* => hideY',
        animate('1000ms ease-out', style({  // Style while animation
          height: '0px'
        })
      )),
      transition('hideY => *', [
        style({height: '0px'}),  // Apply style Before anim start
        animate('1000ms ease-in', style({  // Style while animation
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
    this.toggle = this.toggle === 'hideY' ? '' : 'hideY';
  }

}
