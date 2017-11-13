import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CoursesService} from '../courses.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService],
  encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit {
  title = "The title of the courses page";
  courses;

  constructor(private coursesService : CoursesService) {
    this.courses = coursesService.getCourses();
  }

  ngOnInit() {
  }
  
  sendCourse(_course : string){
    this.coursesService.saveCourse(_course);
  }

}
