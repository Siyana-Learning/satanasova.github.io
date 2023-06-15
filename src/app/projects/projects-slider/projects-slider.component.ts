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
  // resizeObservable: Observable<Event> = fromEvent(window, 'resize');
  sliderContainerHeight: number = 800;

  constructor(public colorService: ColorService) { }

  ngAfterViewInit(): void {
    // if(this.sliderContainer){
    //   this.sliderContainerWidth = this.sliderContainer.nativeElement.clientWidth
    // }

    // this.resizeObservable.subscribe(() => {
    //   this.sliderContainerWidth = this.sliderContainer.nativeElement.clientWidth;
    //   console.log('slider width ON RESIZE',this.sliderContainerWidth);
    // })
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
    let transform: string = '';
    let scale: number = 0;
    let left: number = 0;
    let top: number = 0;
    let activeProjectZoomFactor = 1.3;
    let rotate: string = '';
    let defaultDeviceScale = 1;
    const indexDistance = i - this.activeProjectIndex;

    switch (this.deviceType.name) {
      case 'phone': scale = 0.55; break;
      case 'tablet': scale = 0.45; break;
      case 'laptop': scale = 0.35; break;
    }

    scale *= 0.5
    
    if (this.activeProjectIndex === i) {
      scale *= activeProjectZoomFactor;
    } 
    
    left = indexDistance * (this.deviceType.width*scale) - (this.deviceType.width - this.deviceType.width*scale)/2;
    top = -(this.deviceType.height - this.deviceType.height*scale)/2;

    if(i > this.activeProjectIndex) {
      left +=  this.deviceType.width * scale * (activeProjectZoomFactor - 1);
    }

    // if (this.activeProjectIndex !== i) {
    //   top += (this.deviceType.height * scale * (activeProjectZoomFactor -1))/2
    // }

    top += Math.round((this.sliderContainerHeight - this.deviceType.height*scale)/2);


    // cover case for active device
  
    style.scale = scale;
    style.left = left +'px';
    style.top = top + 'px';
    // style.rotate = rotate;
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
    // this.deviceWidth = 
    // console.log(this.deviceWidth);
  }

  getDevicePosition(windowSize: number) {
    let scale: number = 0;
    
    if(windowSize <= 360) {
      scale = 0.3
    } else 
    if(windowSize > 360 && windowSize <= 640) {
      scale = 0.5
    }

    // console.log('get scale', scale);
    
  }

}
