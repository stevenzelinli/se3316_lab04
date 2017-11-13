import { Injectable, ElementRef, Renderer } from '@angular/core';

@Injectable()
export class CoursesService {
  courseList = ["Course1", "Course2", "Course3"];
  
  constructor() { }
  
  getCourses() : string[]{
      return this.courseList;
  }
  
  saveCourse(_course : string){
    this.courseList.push(_course);
  }

}
