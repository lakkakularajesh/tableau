import { Injectable } from '@angular/core';
import { Imgmeta } from './imgmeta';

@Injectable()
export class AppService {

  getData(): Promise<Imgmeta[]> {
    return Promise.resolve([
      { title: 'winter',
        url: 'https://images.pexels.com/photos/6993/snow-winter-christmas-deer.jpg?h=350&auto=compress&cs=tinysrgb',
        date: new Date() },
      { title: 'summer',
        url: 'https://cdn4.dogonews.com/images/5410c143-ac45-4dc5-9a0e-634ee17ca447/800px-it-s_summer_time_04.jpg',
        date: new Date() },
      { title: 'spring',
        url: 'https://images.pexels.com/photos/28585/pexels-photo-28585.jpg?h=350&auto=compress&cs=tinysrgb',
        date: new Date() }
    ]);
  }

}
