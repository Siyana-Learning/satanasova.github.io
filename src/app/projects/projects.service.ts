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
        usedTech: ['pug', 'sass', 'js', 'jquery'], 
        descriptionText: 'Rolso desc'},
    },
    {
      src: 'https://satanasova.github.io/delivery-app-frontend/',
      description: {
        title: 'Delivery App',
        usedTech: ['angular', 'sass'], 
        descriptionText: 'Delivery App desc'},
      
    },
    {
      src: 'https://satanasova.github.io/photo-cutter/', 
      description: {
        title: 'Photo Cutter', 
        usedTech: ['html', 'sass','js'], 
        descriptionText: 'Photo Cutter desc'},

    },
    {
      src: 'https://satanasova.github.io/UD-final-task/', 
      description: {
        title: 'Rolso', 
        usedTech: ['html', 'sass', 'pug', 'jquery'], 
        descriptionText: 'Rolso desc'},
    },
    {
      src: 'https://satanasova.github.io/photo-cutter/', 
      description: {
        title: 'Photo Cutter', 
        usedTech: ['js'], 
        descriptionText: 'Photo Cutter desc'},
    },
    {
      src: 'https://satanasova.github.io/photo-cutter/', 
      description: {
        title: 'Photo Cutter', 
        usedTech: ['js'], 
        descriptionText: 'Photo Cutter desc'},
    },
    {
      src: 'https://satanasova.github.io/photo-cutter/', 
      description: {
        title: 'Photo Cutter', 
        usedTech: ['js'], 
        descriptionText: 'Photo Cutter desc'},
    },
  ]

  // projectsObs: BehaviorSubject<Project[] | any> = new BehaviorSubject(this.projects);

  constructor() {
    
  }

  getProjects() {
    return this.projects;
  }

}
