import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Imgmeta } from '../../imgmeta';

@Component({
  selector: 'app-tableu',
  templateUrl: './tableu.component.html',
  styleUrls: ['./tableu.component.css'],
  providers: [AppService]
})
export class TableuComponent implements OnInit {

  imgsData: Imgmeta[];

  constructor(private appService: AppService) { }

  getData(): void {
    this.appService.getData().then(data => this.imgsData = data);
  }

  ngOnInit(): void {
    this.getData();
  }
}
