import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import { Client, Stomp } from '@stomp/stompjs';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
 // Open connection with the back-end socket
 public connect() {
  
  let socket = new SockJS('http://localhost:8086/invitation');
  let stompClient=Stomp.over(socket); 
  return stompClient;

  
}
}
