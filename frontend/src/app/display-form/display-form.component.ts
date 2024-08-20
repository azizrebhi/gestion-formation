import { Component, OnInit } from '@angular/core';
import { Form } from "../form";
import { FormService } from "../FormService";

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {
  forms: Form[] = [];

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms(): void {
    this.formService.getForms().subscribe((data: Form[]) => {
      this.forms = data;
    }, error => {
      console.error('Error fetching forms:', error);
    });
  }

  onDeleteForm(id: string): void {
    if (confirm('Are you sure you want to delete this form?')) {
      this.formService.deleteForm(id).subscribe(() => {
        this.forms = this.forms.filter(form => form.id !== id);
        alert('Form deleted successfully.');
      }, error => {
        console.error('Error deleting form:', error);
        alert('An error occurred while deleting the form.');
      });
    }
  }
}
