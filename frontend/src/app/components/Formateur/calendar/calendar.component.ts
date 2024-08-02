import { Component } from '@angular/core';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
 // events: Event[] = [];
  constructor(){}
  /*constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(events => {
      this.events = events;
    });
  }

  addEvent(event: Event): void {
    this.eventService.addEvent(event).subscribe(newEvent => {
      this.events.push(newEvent);
    });
  }

  updateEvent(id: number, event: Event): void {
    this.eventService.updateEvent(id, event).subscribe(updatedEvent => {
      const index = this.events.findIndex(e => e.id === id);
      if (index !== -1) {
        this.events[index] = updatedEvent;
      }
    });
  }

  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id).subscribe(() => {
      this.events = this.events.filter(e => e.id !== id);
    });
  }*/
}
