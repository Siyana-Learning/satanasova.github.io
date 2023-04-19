import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAndSkillsComponent } from './education-and-skills.component';

describe('EducationAndSkillsComponent', () => {
  let component: EducationAndSkillsComponent;
  let fixture: ComponentFixture<EducationAndSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationAndSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationAndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
