import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DempAPIService {

  constructor(private http:HttpClient) {
    
   }

   //github user api
   url:string="https://api.github.com/users";

   getGitUser(){
     
    return this.http.get(this.url)
   }


}
