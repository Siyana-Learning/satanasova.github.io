import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  imageModalRequested: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  openModal(imageSrc: string) {
    this.imageModalRequested.next(imageSrc);
  }

  onImageModalRequested(imageModalRequestHandler: (value: string) => void) {
    this.imageModalRequested.subscribe(imageModalRequestHandler)
  }
}