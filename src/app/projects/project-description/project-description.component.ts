import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Project } from '../projects/models';
import { ColorService } from 'src/app/utils/color.service';
import techIconsData from '../../utils/tech-icons.json';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {
  @Input() projects: Project[] = []
  @Input() activeProjectIndex: number = 0
  projectDescription: any = '';
  techIconGroups: any;


  constructor(public colorService: ColorService) {
  }
  
  ngOnInit(): void {
    this.techIconGroups = techIconsData;
    console.log(this.techIconGroups);
  }

  getIconTitle(iconStr: string) {
    const iconTechs = this.techIconGroups.map((group:any) => group.techs);
    const iconObjects = iconTechs.reduce((acc: [], curr: []) => acc.concat(curr), [] );
    const iconObject = iconObjects.find((obj: any) => obj.svg === iconStr);

    return iconObject.title;
  }
}
