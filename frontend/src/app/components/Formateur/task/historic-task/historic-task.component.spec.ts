import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricTaskComponent } from './historic-task.component';

describe('HistoricTaskComponent', () => {
  let component: HistoricTaskComponent;
  let fixture: ComponentFixture<HistoricTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricTaskComponent]
    });
    fixture = TestBed.createComponent(HistoricTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
