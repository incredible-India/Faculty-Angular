import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponentComponent } from './components/basic-component/basic-component.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponentComponent,
    HomescreenComponent,
    FileNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
