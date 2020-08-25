import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Entry<any>[] = [];
  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { console.log("CLC CONS--------");}
  ngOnInit() {
    console.log("CLC init");
    this.contentfulService.getCourses()
      .then(courses => this.courses = courses);
  }
  goToCourseDetailsPage(courseId) {
    console.log(courseId);
    this.router.navigate(['/course', courseId]);
  }
}