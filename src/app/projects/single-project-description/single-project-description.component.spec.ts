import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectDescriptionComponent } from './single-project-description.component';

describe('SingleProjectDescriptionComponent', () => {
  let component: SingleProjectDescriptionComponent;
  let fixture: ComponentFixture<SingleProjectDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProjectDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProjectDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
