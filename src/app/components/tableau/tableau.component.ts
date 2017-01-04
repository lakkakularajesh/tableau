import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Imgmeta } from '../../imgmeta';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
  providers: [AppService]
})
export class TableauComponent implements OnInit {

  imgsData: Imgmeta[];

  constructor(private appService: AppService) {}

  getData(data: Imgmeta[]): void {
    this.imgsData = data;
  }

  ngOnInit(): void {
    this.appService.getFlickrImgs(this.getData.bind(this));
  }
}
