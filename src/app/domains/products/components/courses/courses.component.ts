import {Component, inject} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {Course, LcApiService} from '../../services/lc-api.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-courses',
  imports: [AsyncPipe],
  /* templateUrl: './courses.component.html',  */
  template: `
    @if (courses$ | async; as courses) {
      @for (course of courses; track course.id) {
          {{ course.title }}
      }
    }
  `,
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  /* @Input() userId!: string; */
  courses$!: Observable<Course[]>;
  private LcApiService = inject(LcApiService);
  constructor() {
    this.courses$ = this.LcApiService.getCourses();
  }

}

