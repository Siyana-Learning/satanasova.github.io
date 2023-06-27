import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { DeviceType, ProjectPreviewConfig } from '../projects/models';
import { ColorService } from 'src/app/utils/color.service';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('iframe', {static: false})
  iframe: any;

  @Input() projectConfig: ProjectPreviewConfig = {
    iframeSrc: '',
    projectName: '',
    isActiveProject: false,
    deviceType: DeviceType.PHONE
  }
  
  isFrameLoaded: boolean = false;
  showFrame: boolean = false;

  constructor(public colorService: ColorService) { 
  }

  ngAfterViewInit(): void {
  }
  
  ngOnChanges(): void {
    if(!this.projectConfig.isActiveProject) {
      this.showFrame = false;
    }
  }
  
  ngOnInit(): void {
  }

  handleShowFrame() {
    this.isFrameLoaded = false;
    this.showFrame = true;

    setTimeout(() => {
      this.iframe.nativeElement.addEventListener('load', () => this.isFrameLoaded = true)
    }, 0)
  }


}
