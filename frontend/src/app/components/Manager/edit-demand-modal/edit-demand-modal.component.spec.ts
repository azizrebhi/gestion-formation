import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDemandModalComponent } from './edit-demand-modal.component';

describe('EditDemandModalComponent', () => {
  let component: EditDemandModalComponent;
  let fixture: ComponentFixture<EditDemandModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDemandModalComponent]
    });
    fixture = TestBed.createComponent(EditDemandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
