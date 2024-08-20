import { Component } from '@angular/core';
import {Poll} from "../../poll.model";
import {PollService} from "../../poll.service";


@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css']
})
export class AddPollComponent {
  poll: Poll = new Poll(); // Poll object to bind to the form
  options: { id: number, option: string, score: number }[] = []; // Ensure types are lowercase

  constructor(private pollService: PollService) {}

  addOption(optionText: string) {
    if (optionText) {
      this.options.push({ id: this.options.length + 1, option: optionText, score: 0 });
      this.poll.options = this.options;
    }
  }

  removeOption(option: { id: number, option: string, score: number }) {
    this.options = this.options.filter(o => o !== option);
    this.poll.options = this.options;
  }

  onSubmitPollForm() {
    console.log('Submit button clicked');
    if (this.poll.title && this.options.length > 0) {
      this.pollService.savePoll(this.poll).subscribe(response => {
        console.log('Poll saved:', response);
        alert('Poll saved successfully!');
        // Reset form or navigate to another page after saving the poll
      }, error => {
        console.error('Error saving poll:', error);
        alert('An error occurred while saving the poll. Please try again.');
      });
    } else {
      alert('Please provide a title and at least one option for the poll.');
    }
  }

}
