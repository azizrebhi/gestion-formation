
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Component, OnInit } from '@angular/core';
import {PollService} from "../../poll.service";
import {Poll} from "../../poll.model";


@Component({
  selector: 'app-my-polls',
  templateUrl: './my-polls.component.html',
  styleUrls: ['./my-polls.component.css']
})
export class MyPollsComponent implements OnInit {

  constructor(private pollService: PollService,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
   ) { }
  polls: Poll[] = [];

  ngOnInit() {
    this.loadMyPolls();
  }

  deletePoll(id) {
    this.pollService.deletePoll(id)
      .subscribe(success => {
        this.loadMyPolls();
      }, error => {
        console.log(error);
      });
  }

  loadMyPolls() {

    this.pollService.getPolls().subscribe(polls => {
      this.polls = polls;
    }, error => {
      console.log(error);
    });
  }
}
