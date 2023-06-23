import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, find, firstValueFrom } from 'rxjs';
import { Project } from './projects/models';
import { HttpClient } from '@angular/common/http';
import projectsData from '../utils/projects-data.json'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [ ]

  constructor() {
    this.projects = projectsData;
  }
  
  getProjects() {
    return this.projects;
  }

}
