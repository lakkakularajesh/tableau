import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeadComponent } from './components/head/head.component';
import { TableuComponent } from './components/tableu/tableu.component';

@NgModule({
  declarations: [
    HeadComponent,
    TableuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HeadComponent, TableuComponent]
})
export class AppModule { }
