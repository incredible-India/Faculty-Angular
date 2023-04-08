import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrtStudentComponent } from './crt-student/crt-student.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';

const routes: Routes = [

  //defining path specially for the student related service first home page

  {path:"",component:StudenthomeComponent},

  //for creating student list

  {path:"create",component:CrtStudentComponent},

  //for editing the student list

  {path:"edit/:id",component:EditStudentComponent},

  //for the list of the students
  {path:"list",component:ListstudentComponent}





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
