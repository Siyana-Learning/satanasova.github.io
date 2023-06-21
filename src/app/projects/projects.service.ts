import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, find, firstValueFrom } from 'rxjs';
import { Project } from './projects/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [ ]

  constructor(private http: HttpClient) {
    
  }
  
  getProjects() {
    return firstValueFrom(this.http.get<Project[]>('./assets/projects-data.json'))
  }

}
