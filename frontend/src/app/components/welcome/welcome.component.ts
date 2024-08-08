import { Component, OnInit } from '@angular/core';
import {PollService} from "../../poll.service";
import {Poll} from "../../poll.model";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  polls: Poll[];
  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.pollService.getPolls().subscribe(polls => {
      this.polls = polls;
    }, error => {
      console.log(error);
    });
  }
}
