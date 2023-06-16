import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DeviceType, Project } from '../projects/models';
import { ColorService } from 'src/app/utils/color.service';

@Component({
  selector: 'app-projects-slider',
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.scss']
})
export class ProjectsSliderComponent implements OnInit, AfterViewInit {
  @ViewChild('slider') sliderContainer?: any;

  @Input() projects: Project[] = []; 
  @Input() activeProjectIndex: number = 0;

  @Output() activeProjectChanged: EventEmitter<number> = new EventEmitter();
  @Output() deviceTypeChanged: EventEmitter<DeviceType> = new EventEmitter();

  deviceType: DeviceType = DeviceType.PHONE;

  sliderContainerHeight: number = 0;
  sliderContainerWidth: number = 0;

  constructor(public colorService: ColorService) { }

  ngAfterViewInit(): void {
    if(this.sliderContainer){
      this.sliderContainerWidth = this.sliderContainer.nativeElement.clientWidth;
      this.sliderContainerHeight = this.sliderContainer.nativeElement.clientHeight;
    }
  }

  ngOnInit(): void {
    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event: any) {
      console.log('receiveMessage', event, event.data);
    }
  }

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
    let scale: number = 0;
    let left: number = 0;
    let top: number = 0;
    let activeProjectZoomFactor = 1.4;
    let rotate: number = 0;
    const indexDistance = i - this.activeProjectIndex;
    const breakpoints: any = {
      mobile: 425,
      tablet: 875,
      laptop: 1366
    }

    switch (this.deviceType.name) {
      case 'phone': scale = 0.55; break;
      case 'tablet': scale = 0.45; break;
      case 'laptop': scale = 0.3; break;
    }
    
    if (this.activeProjectIndex === i) {
      scale *= activeProjectZoomFactor;
    } 

    if(this.sliderContainerWidth < breakpoints.mobile) {
      scale *= 0.5;
    } else if (this.sliderContainerWidth > breakpoints.mobile && this.sliderContainerWidth < breakpoints.tablet) {
      scale *= 0.7;
    } 

    rotate = indexDistance * (scale * 0.7) * 50
    left = indexDistance * (this.deviceType.width*scale) - (this.deviceType.width - this.deviceType.width*scale)/2;
    top = -(this.deviceType.height - this.deviceType.height*scale)/2;

    if(i > this.activeProjectIndex) {
      left += this.deviceType.width * scale * (activeProjectZoomFactor - 1);
    }

    top += Math.round((this.sliderContainerHeight - this.deviceType.height*scale)/2);

    if (this.sliderContainerWidth < breakpoints.mobile) {
      left += 20; 
    } else {
      left += this.sliderContainerWidth * 0.2
    }
  
    style.scale = scale;
    style.left = left +'px';
    style.top = top + 'px';
    style.rotate = rotate + 'deg';
    style.opacity = indexDistance <= 3 ? 1 : 0;
    style.zIndex = 49 - Math.abs(indexDistance * 10)
    style.filter = `blur(${Math.abs(indexDistance)*2}px)`;

    return style
  }

  getDistance(i: number) {
    return Math.abs(i - this.activeProjectIndex);
  }

  changeDeviceWidth(device: string) {
    this.deviceType = (DeviceType as any)[device];
    this.deviceTypeChanged.emit(this.deviceType as any);
  }
  
}
