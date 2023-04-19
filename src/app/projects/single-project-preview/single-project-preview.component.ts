import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-project-preview',
  templateUrl: './single-project-preview.component.html',
  styleUrls: ['./single-project-preview.component.scss']
})
export class SingleProjectPreviewComponent implements OnInit {
  @Input() iframeSrc: any = 'https://satanasova.github.io/delivery-app-frontend/'
  
  constructor() { }

  ngOnInit(): void {
  }

}
