import { Component, OnInit } from '@angular/core';
import { Project } from './models';
import { BehaviorSubject } from 'rxjs';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor(private projectsService: ProjectsService) { 
  }

  ngOnInit(): void {
  }

  prev() {
  }

  next() {
  }
}
