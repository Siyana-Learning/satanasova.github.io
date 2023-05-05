import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DeviceType, Project } from '../projects/models';

@Component({
  selector: 'app-projects-slider',
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.scss']
})
export class ProjectsSliderComponent implements OnInit {
  @Input() projects: Project[] = []; 
  @Input() activeProjectIndex: number = 0;
  @Output() activeProjectChanged: EventEmitter<number> = new EventEmitter();
  deviceType: DeviceType = DeviceType.PHONE;

  constructor() { }

  ngOnInit(): void { }

  prev() {
    if (this.activeProjectIndex > 0) {
      this.activeProjectIndex--;
    }

    this.activeProjectChanged.emit(this.activeProjectIndex)
  }

  next() {
    if (this.activeProjectIndex < this.projects.length - 1) {
      this.activeProjectIndex++;
    }

    this.activeProjectChanged.emit(this.activeProjectIndex)
  }
  
  getProjectStyling(projects: Project[], i: number) {
    const style: any = {};
    const transform: string[] = [];
    const indexDistance = i - this.activeProjectIndex

    // transform.push(`translateX(${indexDistance * this.deviceType.width/3}px)`)
    // transform.push(`rotate(${indexDistance*25}deg)`)

    if (i === this.activeProjectIndex) {
      // transform.push('scale(0.7)')
      let deviceStyle = ''
      switch(this.deviceType.name) {
        case 'phone':  deviceStyle = `scale(0.7) translateX(${this.deviceType.width/2}px)`; break;
        case 'tablet':  deviceStyle = `scale(0.6) translateY(${-this.deviceType.height/4}px) `; break;
        case 'laptop':  deviceStyle = `scale(0.5) translateX(${-this.deviceType.width/3}px)`; break;
        default:  deviceStyle = 'scale(0.7)';
      }

      transform.push(deviceStyle)
      
    } else {
      // transform.push('scale(0.5)')
      let deviceStyle = ''
      switch(this.deviceType.name) {
        case 'phone':  deviceStyle = `scale(0.5) translateX(${indexDistance * this.deviceType.width + this.deviceType.width/2}px) rotate(${indexDistance*25}deg)`; break;
        case 'tablet':  deviceStyle = `scale(0.4) translateX(${indexDistance * this.deviceType.width/1.5}px) rotate(${indexDistance*30}deg) translateY(${-this.deviceType.height/2.5}px)`; break;
        case 'laptop':  deviceStyle = `scale(0.3) translateX(${indexDistance > 0 ? indexDistance * this.deviceType.width/2 : indexDistance * this.deviceType.width - this.deviceType.width/3}px) rotate(${indexDistance*10}deg)`; break;
        default:  deviceStyle = 'scale(0.5)';
      }

      transform.push(deviceStyle)

    }

    switch(indexDistance) {

    }

    style.transform = transform.join(' ');
    style.opacity = indexDistance <= 3 ? 1 : 0;
    style.zIndex = 1000 - Math.abs(indexDistance * 100)
    style.filter = `blur(${Math.abs(indexDistance)*2}px)`
 
    // console.log(transform)

    return style
  }

  getDistance(i: number) {
    return Math.abs(i - this.activeProjectIndex);
  }



  changeDeviceWidth(device: string) {
    this.deviceType = (DeviceType as any)[device];
    // this.deviceWidth = 
    // console.log(this.deviceWidth);
  }
}




