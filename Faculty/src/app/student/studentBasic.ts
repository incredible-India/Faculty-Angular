export interface Student{

    sname:string,
    sid:number,
    semail:string,
    sadderess:any
    


}


//this var will store the all student list
export var studentList:Array<Student>= [];

//method will return all the student list
export function getData(){

   console.log("student with all list");
   

}

//method will return student information by his/her id

export function getStudentById(id:number)
{
    console.log("student by id");
    

}






