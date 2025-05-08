import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Course {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LcApiService {
  private http = inject(HttpClient);
  constructor() { }

  // This service can now make HTTP requests via `this.http`

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`https://lc-api.free.beeceptor.com/api/courses`);
  }

}
