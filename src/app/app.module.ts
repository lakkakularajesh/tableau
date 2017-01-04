import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeadComponent } from './components/head/head.component';
import { TableauComponent } from './components/tableau/tableau.component';

@NgModule({
  declarations: [
    HeadComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HeadComponent, TableauComponent]
})
export class AppModule { }
