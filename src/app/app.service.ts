import { Injectable } from '@angular/core';
import { Imgmeta } from './imgmeta';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  flickr: any;

  constructor() {
    this.flickr = new Flickr({
      api_key: '5658a57681bd0f6e4d62d3e60332657b',
      secret: 'c36b8ebf759b625f'
    });
  }

  getFlickrImgs(onNext: any): void {
    this.flickr.photos.getRecent({
      extras: ['description', 'license', 'date_upload', 'date_taken',
          'owner_name', 'icon_server', 'original_format', 'last_update',
          'geo', 'tags', 'machine_tags', 'o_dims', 'views', 'media', 'path_alias',
          'url_sq', 'url_t', 'url_s', 'url_q', 'url_m', 'url_n', 'url_z', 'url_c', 'url_l', 'url_o'],
      per_page: 10
    }, function(err, result) {
      if (err) {
        throw new Error(err);
      }
      let temp = Observable.create(observer => {
        observer.next(result.photos.photo);
      });
      temp.subscribe(onNext);
    });
  }

}
