import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms"
@Component({
  selector: 'app-crt-student',
  templateUrl: './crt-student.component.html',
  styleUrls: ['./crt-student.component.css']
})


export class CrtStudentComponent {


  //her send the reactive form

  NewStudent = new FormGroup({
    sname:new FormControl("",[Validators.required,Validators.minLength(2)]),
    sid : new FormControl("",[Validators.required]),
    semail : new FormControl("",[Validators.required,Validators.email]),
    saddress : new FormControl("",[Validators.required]),

  })


  //form data will come here after submission

  studentInfoFromForm(){
    console.log("helloform");
    alert("hello")
    console.log(this.NewStudent.value);
    
  }


  //validator for the name
  get sname(){
    return this.NewStudent.get('sname')
  }

    //validator for the sid
    get sid(){
      return this.NewStudent.get('sid')
    }
    //validator for the email
    get semail(){
      return this.NewStudent.get('semail')
    }

      //validator for thesaddress
  get saddress(){
    return this.NewStudent.get('saddress')
  }

  

}
