import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { HeadComponent } from './components/head/head.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { FlickrService } from './services/flickr.service';
import { PicasaService } from './services/picasa.service';
import { DropboxService } from './services/dropbox.service';

@NgModule({
  declarations: [
    HeadComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [FlickrService, PicasaService, DropboxService],
  bootstrap: [HeadComponent, TableauComponent]
})
export class AppModule { }
