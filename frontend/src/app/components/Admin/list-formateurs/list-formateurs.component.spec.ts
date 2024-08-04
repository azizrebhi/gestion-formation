import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormateursComponent } from './list-formateurs.component';

describe('ListFormateursComponent', () => {
  let component: ListFormateursComponent;
  let fixture: ComponentFixture<ListFormateursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFormateursComponent]
    });
    fixture = TestBed.createComponent(ListFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
