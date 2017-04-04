import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FlickrService } from '../../services/flickr.service';
import { PicasaService } from '../../services/picasa.service';
import { DropboxService } from '../../services/dropbox.service';

import { Imgmeta } from '../../imgmeta';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
  providers: []
})
export class TableauComponent implements OnInit {

  photos: Observable<Imgmeta[]>;

  constructor(private flickr: FlickrService,
              private picasa: PicasaService,
              private dropbox: DropboxService) {

  }

  ngOnInit(): void {
    this.photos = Observable.merge(this.flickr.getImages(),
                                  this.picasa.getImages(),
                                  this.dropbox.getImages());

  }
}
