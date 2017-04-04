/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DropboxService } from './dropbox.service';

describe('DropboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropboxService]
    });
  });

  it('should ...', inject([DropboxService], (service: DropboxService) => {
    expect(service).toBeTruthy();
  }));
});
