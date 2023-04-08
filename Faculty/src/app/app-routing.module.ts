import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponentComponent } from "./components/basic-component/basic-component.component"
import {HomescreenComponent} from "./components/homescreen/homescreen.component"
import {FileNotFoundComponent} from "./components/file-not-found/file-not-found.component"
//defing the path
const routes: Routes = [

//path for the default route
{path:"",component:HomescreenComponent},
//for the unknow route

{path:"**",component:FileNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
