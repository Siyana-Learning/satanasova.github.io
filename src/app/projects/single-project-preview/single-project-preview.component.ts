import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-single-project-preview',
  templateUrl: './single-project-preview.component.html',
  styleUrls: ['./single-project-preview.component.scss']
})
export class SingleProjectPreviewComponent implements OnInit, AfterViewInit {
  @ViewChild('iframe') iframe?: any;
  @Input() iframeSrc: any;
  @Input() showFrame: boolean = false;

  
  constructor() { 
  }
  
  ngAfterViewInit(): void {
    
    // throw new Error('Method not implemented.');
    if(this.iframe) {
      console.log('iframe', (this.iframe as any).nativeElement);
      const iframeWindow = this.iframe.nativeElement.contentWindow
      if(iframeWindow) {
        (iframeWindow as any).console.log = function() {}
      }
    }
  }
  
  ngOnInit(): void {
  }

}
