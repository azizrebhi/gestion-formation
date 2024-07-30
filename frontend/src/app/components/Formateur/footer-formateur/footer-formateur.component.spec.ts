import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFormateurComponent } from './footer-formateur.component';

describe('FooterFormateurComponent', () => {
  let component: FooterFormateurComponent;
  let fixture: ComponentFixture<FooterFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterFormateurComponent]
    });
    fixture = TestBed.createComponent(FooterFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
