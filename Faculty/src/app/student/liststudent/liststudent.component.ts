import { Component } from '@angular/core';
import { StudentService,Student } from './../studentBasic';
@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent {

nostudent:boolean = true;



constructor(private studentService: StudentService) {}

ngOnInit() {
  const { status, studentList } = this.studentService.getStudentList();
  if (status) {
    
   console.log(studentList);
   
  }
  console.log(studentList);
}

  
  //studentList having all the list of student

  


}
