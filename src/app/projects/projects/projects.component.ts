import { Component, Input, OnInit } from '@angular/core';
import { Project } from './models';
import { BehaviorSubject } from 'rxjs';
import { ProjectsService } from '../projects.service';
import { ColorService } from 'src/app/utils/color.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[] = [];
  activeProjectIndex: number = 0;

  constructor(public colorService: ColorService) { 
  }

  ngOnInit(): void {
  }

  changeProjectIndex(activeProjectIdx: any) {
    this.activeProjectIndex = activeProjectIdx
  }
}
