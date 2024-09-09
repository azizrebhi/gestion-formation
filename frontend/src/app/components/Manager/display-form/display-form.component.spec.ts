import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormComponent } from './display-form.component';

describe('DisplayFormComponent', () => {
  let component: DisplayFormComponent;
  let fixture: ComponentFixture<DisplayFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayFormComponent]
    });
    fixture = TestBed.createComponent(DisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
