import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {
  @Input() eventId: number = 0; // Default value
  response: string = '';
  availableStart: string = '';
  availableEnd: string = '';

  constructor(private http: HttpClient) { }

  respondToInvitation() {
    const payload = {
      response: this.response,
      availableStart: this.availableStart,
      availableEnd: this.availableEnd
    };
    this.http.post(`/api/events/${this.eventId}/respond`, payload).subscribe(response => {
      console.log('Response sent', response);
    });
  }

}
