import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

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
  private baseUrl = environment.apiBaseUrl;
  private coursesEndpoint = environment.apiCoursesEndpoint;

  constructor() { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}${this.coursesEndpoint}`);
  }

}
