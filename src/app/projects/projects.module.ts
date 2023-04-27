import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects/projects.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UtilsModule
  ], 
  exports: [ ]
})
export class ProjectsModule { }
