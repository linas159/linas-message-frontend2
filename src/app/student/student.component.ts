import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Student} from "./student";
import {StudentService} from "./services/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students : Observable<Student[]> ;
  constructor(private service: StudentService) {
    this.students = service.getStudents();
  }
}
