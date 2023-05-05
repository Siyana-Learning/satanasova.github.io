import { Component, HostListener, OnInit } from '@angular/core';
import { ProjectsService } from './projects/projects.service';
import { Project } from './projects/projects/models';
import { ColorService } from './utils/color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  projects: Project[];
  @HostListener('window:scroll', ['$event']) onScroll() {
    this.colorService.getColor();
  }
  
  constructor(private projectsService: ProjectsService, private colorService: ColorService) {
    this.projects = this.projectsService.getProjects();
  }
  ngOnInit(): void {
  }
}
