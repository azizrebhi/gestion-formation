import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFormateurComponent } from './aside-formateur.component';

describe('AsideFormateurComponent', () => {
  let component: AsideFormateurComponent;
  let fixture: ComponentFixture<AsideFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideFormateurComponent]
    });
    fixture = TestBed.createComponent(AsideFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
