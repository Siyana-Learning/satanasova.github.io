import { Component, OnInit } from '@angular/core';
import { ColorService } from '../utils/color.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(public colorService: ColorService) { }

  ngOnInit(): void {
  }

}
