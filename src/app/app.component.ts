import { Component } from '@angular/core';
import { ProjectsService } from './projects/projects.service';
import { Project } from './projects/projects/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects: Project[];
  
  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.getProjects();
  }
}
