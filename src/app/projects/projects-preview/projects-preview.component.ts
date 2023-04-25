import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SingleProjectPreviewComponent } from '../single-project-preview/single-project-preview.component';
import { Project } from '../projects/models';

@Component({
  selector: 'app-projects-preview',
  templateUrl: './projects-preview.component.html',
  styleUrls: ['./projects-preview.component.scss']
})
export class ProjectsPreviewComponent implements OnInit {
  @Input() projects: Project[] = [];

  constructor() { 
   const activeProject = this.projects.find(project => project.active)
   console.log(activeProject);
  }

  ngOnInit(): void {
  }

  prev() {}

  next() {}

}
