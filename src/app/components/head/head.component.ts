import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  animations: [
    trigger('flyInOut', [
      state('void', style({
        transform: 'translateY(-100%)'
      })),
      transition('* <=> *', [
        animate(1000)
      ])
    ])
  ]
})
export class HeadComponent implements OnInit {

  isNavShowed: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.isNavShowed = !this.isNavShowed;
  }

}
