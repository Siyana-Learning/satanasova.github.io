import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPreviewComponent } from './projects-preview/projects-preview.component';
import { SingleProjectPreviewComponent } from './single-project-preview/single-project-preview.component';
import { SingleProjectDescriptionComponent } from './single-project-description/single-project-description.component';
import { ProjectsComponent } from './projects/projects.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    ProjectsPreviewComponent,
    SingleProjectPreviewComponent,
    SingleProjectDescriptionComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ], 
  exports: [ ProjectsComponent]
})
export class ProjectsModule { }
