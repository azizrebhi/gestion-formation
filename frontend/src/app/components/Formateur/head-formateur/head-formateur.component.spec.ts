import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadFormateurComponent } from './head-formateur.component';

describe('HeadFormateurComponent', () => {
  let component: HeadFormateurComponent;
  let fixture: ComponentFixture<HeadFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadFormateurComponent]
    });
    fixture = TestBed.createComponent(HeadFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
