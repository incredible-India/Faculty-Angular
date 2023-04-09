import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms"
//the the function has been written here realted to student service...
import { StudentService,Student } from './../studentBasic';
@Component({
  selector: 'app-crt-student',
  templateUrl: './crt-student.component.html',
  styleUrls: ['./crt-student.component.css']
})


export class CrtStudentComponent {

   Student = new StudentService();

  constructor(private studentService: StudentService) {}



  success:boolean =false;
  
  //her send the reactive form

  NewStudent = new FormGroup({
    sname:new FormControl("",[Validators.required,Validators.minLength(2)]),
    sid : new FormControl("",[Validators.required]),
    semail : new FormControl("",[Validators.required,Validators.email]),
    saddress : new FormControl("",[Validators.required]),

  })


  //form data will come here after submission

  studentInfoFromForm(){
    
    //retriving the form data 
    let info = this.NewStudent.value;

    const data:Student = {
      sname:info.sname,
      sid:info.sid,
      semail:info.semail,
      saddress:info.saddress

    }

 
    //data saving in the aaray
    // studentList.push(data);
    this.studentService.addStudent(data);
  
    //clearing the form once it added
    this.NewStudent.reset();
    // once data saved show success message 
    this.success = true;
 
    
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
