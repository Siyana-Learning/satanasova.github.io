import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DeviceType } from '../projects/models';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent implements OnInit, OnChanges {
  @Input() iframeSrc: string = '';
  @Input() showFrame: boolean = false;
  @Input() text = '';
  @Input() deviceWidth: number = DeviceType.PHONE.width;
  @Input() deviceHeight: number = DeviceType.PHONE.height;
  // deviceType: string = 'mobile'
  // deviceType: DeviceType = DeviceType.mobile;
  // deviceSize: DeviceSize = DeviceSize.mobile;
  // deviceSize = {width: 123, height: 1230}
  // deviceType: DeviceType = DeviceType.PHONE;
  
  constructor() { 
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    // console.log('new device is of type', this.deviceType.name);
  }
  
  ngOnInit(): void {
  }

}
