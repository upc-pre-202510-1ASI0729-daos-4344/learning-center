import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {Course, LcApiService} from '../../services/lc-api.service';
import {Observable} from 'rxjs';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-courses',
  imports: [AsyncPipe, MatCardModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  /* @Input() userId!: string; */
  courses$!: Observable<Course[]>;
  private LcApiService = inject(LcApiService);
  constructor() {
    this.courses$ = this.LcApiService.getCourses();
  }

}

