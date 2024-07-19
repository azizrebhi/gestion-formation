import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFormationComponent } from './delete-formation.component';

describe('DeleteFormationComponent', () => {
  let component: DeleteFormationComponent;
  let fixture: ComponentFixture<DeleteFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteFormationComponent]
    });
    fixture = TestBed.createComponent(DeleteFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
