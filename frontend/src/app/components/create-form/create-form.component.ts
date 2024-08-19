import { Component } from '@angular/core';
import { FormService } from '../../FormService';
import {Poll} from "../../poll.model";
import {Form} from "../../form";
import {PollService} from "../../poll.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class FormCreateComponent {
  form: Form = new Form();
  polls: Poll[] = [];
  selectedPoll: Poll;

  constructor(private formService: FormService, private pollService: PollService, private router: Router) {}

  ngOnInit(): void {
    // Load available polls to be added to the form
    this.pollService.getPolls().subscribe((data: Poll[]) => {
      this.polls = data;
    });
  }

  addPollToForm(poll: Poll) {
    if (poll && !this.form.polls.includes(poll)) {
      this.form.polls.push(poll);
    }
  }

  removePollFromForm(poll: Poll): void {
    this.form.polls = this.form.polls.filter(p => p !== poll);
  }

  onSubmitForm() {
    // Extract the IDs of the selected polls
    const pollIds = this.form.polls.map(poll => Number(poll.id));

    // Create a new form object to send to the backend
    const newForm = {
      title: this.form.title,
      pollIds: pollIds
    };

    // Send the form data to the backend
    this.formService.createForm(newForm).subscribe(response => {
      console.log('Form created successfully:', response);
      this.router.navigate(['/forms']); // Navigate to the list of forms after successful creation
    }, error => {
      console.error('Error creating form:', error);
    });
  }

}
