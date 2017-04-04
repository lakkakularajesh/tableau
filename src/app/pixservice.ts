import { Observable } from 'rxjs/Observable';

import { Imgmeta } from './imgmeta';

export interface Pixservice {
  api: any
  photos: Observable<Imgmeta[]>
  getImages(): Observable<Imgmeta[]>
}
