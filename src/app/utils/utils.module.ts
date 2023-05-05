import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { ColorService } from './color.service';



@NgModule({
  declarations: [
    SafePipe
  ],
  imports: [ CommonModule ], 
  exports: [ SafePipe ]
})
export class UtilsModule { }
