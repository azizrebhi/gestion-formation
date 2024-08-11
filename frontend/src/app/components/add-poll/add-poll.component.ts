

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Poll} from "../../poll.model";
import {PollService} from "../../poll.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css']
})

export class AddPollComponent implements OnInit {
  options: string[] = [];
  poll: Poll = {
    id: null,
    title: null,
    endDate: new Date(),
    options: null,
    user: null
  };

  constructor(private pollService: PollService, private router: Router) { }

  ngOnInit() {
  }

  addOption(option: string) {
    if (option !== undefined && option != null && option !== '') {
      this.options.push(option);
    }
  }

  removeOption(optionDel: string) {
    this.options = this.options.filter(option => option !== optionDel);
  }


  onSubmitPollForm(f) {

    this.options.forEach(option => {
      if (this.poll.options == null) {
        this.poll.options = [{
          id:0,
          option: option,
          score: 0
        }];
      } else {
        this.poll.options.push({
          id:0,
          option: option,
          score: 0
        });

      }

    });
    this.poll.endDate = new Date(f.value.endDate);
    this.pollService.savePoll(this.poll).subscribe(success => {
      this.router.navigate(['']);

    }, error => {
      console.log(error);

    });
  }

}
