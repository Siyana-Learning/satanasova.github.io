import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { ColorService } from './color.service';
import { ImageModalComponent } from './image-modal/image-modal.component';



@NgModule({
  declarations: [
    SafePipe,
    ImageModalComponent
  ],
  imports: [ CommonModule ], 
  exports: [ SafePipe, ImageModalComponent ]
})
export class UtilsModule { }
