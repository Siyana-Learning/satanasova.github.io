import { Component, OnInit } from '@angular/core';
import { ColorService } from '../utils/color.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(public colorService: ColorService) { }

  ngOnInit(): void {
  }

 
}
