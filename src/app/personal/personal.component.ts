import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from '../utils/color.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  @Input() showMinimizedHeader: boolean = false

  constructor(public colorService: ColorService) { }

  ngOnInit(): void {
  }

 
}
