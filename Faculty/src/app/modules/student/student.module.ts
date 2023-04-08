import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { CrtStudentComponent } from './crt-student/crt-student.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';


@NgModule({
  declarations: [
    EditStudentComponent,
    ListstudentComponent,
    CrtStudentComponent,
    StudenthomeComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
