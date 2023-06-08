import { Component, Input, OnInit } from '@angular/core';
import { DeviceType, Project } from './models';
import { ColorService } from 'src/app/utils/color.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[] = [];
  activeProjectIndex: number = 0;

  deviceType: DeviceType = DeviceType.PHONE;

  constructor(public colorService: ColorService) { 
  }

  ngOnInit(): void {
  }

  changeProjectIndex(activeProjectIdx: any) {
    this.activeProjectIndex = activeProjectIdx
  }

  changeDeviceType(deviceType: any) {
    this.deviceType = deviceType;
  }

  // getProjects() {
  //   console.log('get projects device type', this.deviceType);
  //   if(this.deviceType != DeviceType.LAPTOP) {
  //     return this.projects.filter((project: Project) => project.responsive || !project.hasOwnProperty('responsive'));
  //   } else {
  //     return this.projects
  //   }
  // }
}
