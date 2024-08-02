import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-formateur',
  templateUrl: './aside-formateur.component.html',
  styleUrls: ['./aside-formateur.component.css']
})
export class AsideFormateurComponent {
  isCalendarVisible = false;

  showCalendar() {
    this.isCalendarVisible = true;
  }
}
