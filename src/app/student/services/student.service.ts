import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  studentUrl = 'api/students';

  public getStudents(): Observable<Student[]>{
    // Added responseType: text, because for demo purpose I am just sending plain "Hello, World" text from the backend
    return this.http.get<Student[]>(this.studentUrl);
  }
}
