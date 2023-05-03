import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Project } from '../projects/models';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {
  @Input() projects: Project[] = []
  @Input() activeProjectIndex: number = 0
  projectDescription: any = '';



  constructor() {
  }
  
  
  ngOnInit(): void {
  }

}
