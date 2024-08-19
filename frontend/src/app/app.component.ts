import { Component } from '@angular/core';
import { WebSocketService } from './service/web-socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public notifications = 0;
  title = 'Actia-Academy';
  constructor(private webSocketService: WebSocketService) {
/*
 //open connection with server socket 
 let stompClient =this.webSocketService.connect();
 stompClient.connect({},(_:Stomp.Frame) => {
//subscribe to notification topic
stompClient.subscribe('/topic/notification',(message:Stomp.Message) => {
  //update notifications attribute with the recent message sent from the server
  this.notifications=JSON.parse(message.body).count;
})
 })

}*/
}
}