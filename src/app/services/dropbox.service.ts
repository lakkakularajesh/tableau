import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Imgmeta } from '../imgmeta';
import { Pixservice } from '../pixservice';
import { environment } from '../environment';

@Injectable()
export class DropboxService implements Pixservice {

  api: any
  photos = new Subject<Imgmeta[]>();

  constructor() { }

  getImages(): Observable<Imgmeta[]> {
    return this.photos;
  }

}
