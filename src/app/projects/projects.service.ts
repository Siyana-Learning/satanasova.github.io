import { Injectable } from '@angular/core';
import { BehaviorSubject, find } from 'rxjs';
import { Project } from './projects/models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      src: 'https://satanasova.github.io/UD-final-task/', 
      description: {
        title: 'Rolso', 
        usedTools: ['Pug'], 
        descriptionText: 'Rolso desc'},
    },
    {
      src: 'https://satanasova.github.io/delivery-app-frontend/',
      description: {
        title: 'Delivery App',
        usedTools: ['Angular'], 
        descriptionText: 'Delivery App desc'},
      
    },
    {
      src: 'https://satanasova.github.io/photo-cutter/', 
      description: {
        title: 'Photo Cutter', 
        usedTools: ['JS'], 
        descriptionText: 'Photo Cutter desc'},

    },
    {
      src: 'https://satanasova.github.io/UD-final-task/', 
      description: {
        title: 'Rolso', 
        usedTools: ['Pug'], 
        descriptionText: 'Rolso desc'},
    },
    {
      src: 'https://satanasova.github.io/photo-cutter/', 
      description: {
        title: 'Photo Cutter', 
        usedTools: ['JS'], 
        descriptionText: 'Photo Cutter desc'},
    },
  ]

  projectsObs: BehaviorSubject<Project[] | any> = new BehaviorSubject(this.projects);

  constructor() {
    
  }

}
