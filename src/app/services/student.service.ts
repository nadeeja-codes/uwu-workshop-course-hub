import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../types/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudents() {
    return this.httpClient.get<Student[]>('http://192.168.0.100:8000/api/students');
  }
}
