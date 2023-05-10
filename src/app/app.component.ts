import { Component, HostListener, OnInit } from '@angular/core';
import { ProjectsService } from './projects/projects.service';
import { Project } from './projects/projects/models';
import { ColorService } from './utils/color.service';
import { Observable, combineLatest, concatMap, fromEvent, interval, tap, throttleTime, timer, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  projects: Project[];
  showMinHeader: boolean = false;

  scrollObs = fromEvent(window, 'scroll');
  throttledScrollObs = this.scrollObs.pipe(throttleTime(500));
  // intervalObs = timer(0,3000)
  
  constructor(private projectsService: ProjectsService, private colorService: ColorService) {
    this.projects = this.projectsService.getProjects();
  }

  ngOnInit(): void {
    this.scrollObs.subscribe((data) => {
      this.showMinHeader = window.scrollY > 50
    })

    this.throttledScrollObs.subscribe(data => {
      this.colorService.getColor();
    })
  }
}
