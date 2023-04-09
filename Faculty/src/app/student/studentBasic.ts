export interface Student{

    sname:any,
    sid:any,
    semail:any,
    saddress:any
    


}

var studentList: Array<Student> = [];
//this var will store the all student list






//method will return all the student list


//method will return student information by his/her id






import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 

  constructor() {}

  addStudent(student: Student) {
    studentList.push(student);
  }

  getStudentList() {
    const status = studentList.length > 0;
    return { status, studentList};
  }
}
