import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectPreviewComponent } from './single-project-preview.component';

describe('SingleProjectPreviewComponent', () => {
  let component: SingleProjectPreviewComponent;
  let fixture: ComponentFixture<SingleProjectPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProjectPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProjectPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
