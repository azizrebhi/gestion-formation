import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router for navigation
import { FormService } from 'src/FormService';
import { Form } from "../../../../Form";

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {
  forms: Form[] = [];

  constructor(private formService: FormService, private router: Router) {}  // Inject Router

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

  // New method to delete a form
  deleteForm(id: string): void {
    if (confirm('Are you sure you want to delete this form?')) {
      this.formService.deleteForm(id).subscribe(() => {
        // After successful deletion, remove the form from the local list
        this.forms = this.forms.filter(form => form.id !== id);
        console.log('Form deleted successfully');
      }, error => {
        console.error('Error deleting form:', error);
      });
    }
  }

  // Method to navigate to the "Add Form" page
  navigateToAddForm(): void {
    this.router.navigate(['/homeManager/crform']);  // Update the path as needed
  }
}
