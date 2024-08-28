import { Component } from '@angular/core';
import { Poll } from "../../poll.model";
import { PollService } from "../../poll.service";

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css']
})
export class AddPollComponent {
  poll: Poll = new Poll();
  options: { id: number, option: string, score: number }[] = [];
  categories: string[] = [
    'Organisation et conditions de déroulement',
    'Intérêt pour la formation',
    'Qualité de l\'animation',
    'Appréciation de l\'efficacité de la formation'
  ];
  constructor(private pollService: PollService) {}
  addOption(optionText: string) {
    if (optionText) {
      this.options.push({ id: 0, option: optionText, score: 0 });
      this.poll.options = this.options;
    }
  }
  removeOption(option: { id: number, option: string, score: number }) {
    this.options = this.options.filter(o => o !== option);
    this.poll.options = this.options;
  }
  onSubmitPollForm() {
    console.log('Submit button clicked');
    console.log('Poll data:', this.poll);
    if (this.poll.title && this.poll.categorie && this.options.length > 0) {
      this.pollService.savePoll(this.poll).subscribe(
        response => {

          console.log('Poll saved:', response);
          alert('Poll saved successfully!');
          // Reset form or navigate to another page after saving the poll
        },
        error => {
          console.error('Error saving poll:', error);
          alert('An error occurred while saving the poll. Please try again.');
        }
      );
    } else {
      alert('Please provide a title, select a category, and add at least one option for the poll.');
    }
  }
}
