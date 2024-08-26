import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcarouselmodalComponent } from './addcarouselmodal.component';

describe('AddcarouselmodalComponent', () => {
  let component: AddcarouselmodalComponent;
  let fixture: ComponentFixture<AddcarouselmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcarouselmodalComponent]
    });
    fixture = TestBed.createComponent(AddcarouselmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
