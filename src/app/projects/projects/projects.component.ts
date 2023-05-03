import { Component, Input, OnInit } from '@angular/core';
import { Project } from './models';
import { BehaviorSubject } from 'rxjs';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[] = [];
  activeProjectIndex: number = 0;

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.projects);
  }

  prev() {
  }

  next() {
  }

  changeProjectIndex(activeProjectIdx: any) {
    this.activeProjectIndex = activeProjectIdx
  }
}
