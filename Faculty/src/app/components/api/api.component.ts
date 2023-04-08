import { Component } from '@angular/core';
//serives 
import {DempAPIService} from "../../Services/demp-api.service"
import { identifierName } from '@angular/compiler';
 @Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  //we will store the information of the user in this varable
  userJsonData:any;
//show error
error:boolean =false;

  constructor(private ApiService:DempAPIService) {

    this.ApiService.getGitUser().subscribe(data=>{
      console.log([data]);

      if(navigator.onLine)
      {
        //if user is online
        this.error = false;
        //show the data with help of dom
      
  

          this.userJsonData = data;
      
          for(let i = 0 ; i< this.userJsonData.length;i++)
            document.body.getElementsByClassName('tableBody')[0].innerHTML  += `<tr> <td> ${this.userJsonData[i].login} </td>
            
            <td> ${this.userJsonData[i].id} </td>
            <td> ${this.userJsonData[i].node_id} </td>
            <td> ${this.userJsonData[i].type} </td>
            <td> <a href='${this.userJsonData[i].url}'>Github Acc</a> </td>
           <td>  <img class='img-fluid' src='${this.userJsonData[i].avatar_url}' style="width:50px; height:50px;"> </td>
            </tr>`
      

  
    
      

      }else{
        //if user is offline

        this.error=true
      }
      
    })

  }

  
  

}
