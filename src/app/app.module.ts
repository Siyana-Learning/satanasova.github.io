import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtilsModule } from './utils/utils.module';
import { PersonalComponent } from './personal/personal.component';
import { EducationAndSkillsComponent } from './education-and-skills/education-and-skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    EducationAndSkillsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    UtilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
