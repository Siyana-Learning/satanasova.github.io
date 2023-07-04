import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
  imageSrc: string = '';
  showModal: boolean = false;

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.onModalRequested((imgSrc: string) => {
      if(imgSrc) {
        this.imageSrc = imgSrc;
        this.showModal = true; 
      }
    })
  }

  close() {
    this.showModal = false;
  }

}
