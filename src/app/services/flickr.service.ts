import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Imgmeta } from '../imgmeta';
import { Pixservice } from '../pixservice';
import { environment } from '../environment';

@Injectable()
export class FlickrService implements Pixservice {

  api: any;
  photos = new Subject<Imgmeta[]>();

  constructor() {
    this.api = new Flickr({
      api_key: environment.flickr_key
    });
  }

  getImages(): Observable<Imgmeta[]> {
    this.api.photos.getRecent({
      extras: ['description', 'license', 'date_upload', 'date_taken',
          'owner_name', 'icon_server', 'original_format', 'last_update',
          'geo', 'tags', 'machine_tags', 'o_dims', 'views', 'media', 'path_alias',
          'url_sq', 'url_t', 'url_s', 'url_q', 'url_m', 'url_n', 'url_z', 'url_c', 'url_l', 'url_o']
      //per_page: 10
    }, (err, result) => {
      if (err) {
        throw new Error(err);
      }

      this.photos.next(result.photos.photo);
    });
    return this.photos;
  }

}
