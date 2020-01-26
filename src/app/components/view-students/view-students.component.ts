import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/types/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  private students: Student[] = [];
  private columnsToDisplay = ['name', 'address', 'regId'];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

}
