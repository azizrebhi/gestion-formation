import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingTableComponent } from './rating-table.component';

describe('RatingTableComponent', () => {
  let component: RatingTableComponent;
  let fixture: ComponentFixture<RatingTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingTableComponent]
    });
    fixture = TestBed.createComponent(RatingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
