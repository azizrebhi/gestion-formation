import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit, Input } from '@angular/core';
import {PollService} from "../../poll.service";
import {Poll} from "../../poll.model";

@Component({
  selector: 'app-poll-small',
  templateUrl: './poll-small.component.html',
  styleUrls: ['./poll-small.component.css']
})
export class PollSmallComponent implements OnInit {

  @Input() poll: Poll;
  selected: number;
  votingEnded = false;

  constructor(private pollService: PollService) { }

  ngOnInit() {
    const now = new Date();


  }

  vote() {
    this.pollService.vote(this.poll.id, this.selected).subscribe(success => {
      this.poll.voted = true;

    }, error => {
      console.log(error);

    });
  }

}
