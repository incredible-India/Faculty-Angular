import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponentComponent } from './components/basic-component/basic-component.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { ApiComponent } from './components/api/api.component';



@NgModule({
  declarations: [
    AppComponent,
    BasicComponentComponent,
    HomescreenComponent,
    FileNotFoundComponent,
    ApiComponent,
   

 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
 
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
