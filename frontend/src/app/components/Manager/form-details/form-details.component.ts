import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Form} from "../../../../Form";
import {FormService} from "../../../../FormService";


@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {
  form: Form = new Form();  // Initialize with a new Form object
  selectedOptions: { [pollId: number]: number } = {}; // Store selected option IDs by poll ID
  voteMessage: string = '';

  constructor(private route: ActivatedRoute, private formService: FormService, private router: Router) {}

  ngOnInit(): void {
    const formId = this.route.snapshot.paramMap.get('id');
    if (formId) {
      this.formService.getFormById(formId).subscribe((data: Form) => {
        this.form = data;
      });
    }
  }

  onSelectOption(pollId: number, optionId: number): void {
    this.selectedOptions[pollId] = optionId; // Store the selected option ID for the poll
  }
  onSubmitForm(): void {
    const submissionData = Object.keys(this.selectedOptions).map(pollId => ({
      pollId: Number(pollId),
      selectedOptionId: this.selectedOptions[pollId]
    }));
    this.router.navigate(['/homeManager/feedback']);
    this.formService.voteOnForm(this.form.id, submissionData).subscribe(
      response => {
        this.voteMessage = 'Your vote has been submitted successfully!';
        this.selectedOptions = {};// Reset the selected options

      },
      error => {
        // Handle error (optional)
      }
    );
  }
}
