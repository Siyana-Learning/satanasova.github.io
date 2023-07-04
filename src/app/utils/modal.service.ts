import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalOpened: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  openModal(imageSrc: string) {
    this.modalOpened.next(imageSrc);
  }

  onModalRequested(fn: any) {
    this.modalOpened.subscribe(data => fn(data))
  }

}
