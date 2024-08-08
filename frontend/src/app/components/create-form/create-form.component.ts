import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, AbstractControl} from '@angular/forms';
import { FormService } from '../../FormService';
import { Form, Question } from '../../form';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class FormCreateComponent {
  form: FormGroup;
  createdForm: Form | null = null;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.form = this.fb.group({
      title: '', // Form title
      questions: this.fb.array([]) // Array of question FormGroups
    });
  }

  // Getter to access the questions FormArray
  get questions(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  // Helper function to get options as a FormArray
  getOptions(question: AbstractControl): FormArray {
    return (question as FormGroup).get('options') as FormArray;
  }

  // Method to add a new question
  addQuestion(): void {
    const questionGroup = this.fb.group({
      text: '', // Question text
      type: '', // Question type
      options: this.fb.array([]) // Array of options for multiple-choice questions
    });
    this.questions.push(questionGroup);
  }

  // Method to add a new option to a question
  addOption(question: AbstractControl): void {
    const options = this.getOptions(question);
    options.push(new FormControl('')); // Add a new empty option
  }

  // Method to remove a question
  removeQuestion(index: number): void {
    this.questions.removeAt(index);
  }

  // Method to remove an option from a question
  removeOption(question: AbstractControl, index: number): void {
    const options = this.getOptions(question);
    options.removeAt(index);
  }

  // Method to save the form
  saveForm(): void {
    const formValue = this.form.value;
    const questions: Question[] = formValue.questions.map((q: any) => new Question(q.text, q.type, q.options));
    this.createdForm = new Form(formValue.title, questions);

    this.formService.createForm(this.createdForm).subscribe(
      (savedForm) => {
        console.log('Form saved:', savedForm);
        this.createdForm = savedForm;
      },
      (error) => {
        console.error('Error saving form:', error);
      }
    );
  }
}
