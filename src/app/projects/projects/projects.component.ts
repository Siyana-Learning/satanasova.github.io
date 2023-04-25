import { Component, OnInit } from '@angular/core';
import { Project } from './models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor() { 
    this.projects = [
      {
        src: 'https://satanasova.github.io/', 
        description: {
          title: 'Delivery App',
          usedTools: ['Angular'], 
          descriptionText: 'Delivery App desc'},
        active: true,
        showFrame: true
      },
      {
        src: 'https://satanasova.github.io/photo-cutter/', 
        description: {
          title: 'Photo Cutter', 
          usedTools: ['JS'], 
          descriptionText: 'Photo Cutter desc'},
        showFrame: true
      },
      {
        src: 'https://satanasova.github.io/UD-final-task/', 
        description: {
          title: 'Rolso', 
          usedTools: ['Pug'], 
          descriptionText: 'Rolso desc'}
      },
      {
        src: 'https://satanasova.github.io/photo-cutter/', 
        description: {
          title: 'Photo Cutter', 
          usedTools: ['JS'], 
          descriptionText: 'Photo Cutter desc'},
      },
    ]
  }

  ngOnInit(): void {
  }

}
