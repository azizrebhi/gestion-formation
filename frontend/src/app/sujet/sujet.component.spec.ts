import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SujetComponent } from './sujet.component'; // Import the correct component

describe('SujetComponent', () => {
  let component: SujetComponent;
  let fixture: ComponentFixture<SujetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SujetComponent ] // Use SujetComponent here
    })
    .compileComponents();

    fixture = TestBed.createComponent(SujetComponent); // Create the correct component
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
