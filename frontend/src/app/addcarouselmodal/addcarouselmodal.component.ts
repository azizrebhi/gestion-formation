
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addcarouselmodal',
  templateUrl: './addcarouselmodal.component.html',
  styleUrls: ['./addcarouselmodal.component.css']
})
export class AddcarouselmodalComponent {
  addCourseForm: FormGroup;
  nomSujet: string = '';  // Category Name
  description : string = '';  // Image URL

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddcarouselmodalComponent>,
    private http: HttpClient
  ) {
    this.addCourseForm = this.fb.group({
      nomSujet: [''],  // Category Name
      description: [''] // Image URL
    });
  }

  onAddCourse() {
    if (this.addCourseForm.valid) {
      const sujetData = {
        nomSujet: this.nomSujet,
        description: this.description
      };
      this.registerSujet(sujetData);
    }
  }

  registerSujet(sujet: any) {
    this.http.post('http://localhost:8086/academie/sujets/addSujet', sujet)
      .subscribe(
        data => {
          alert("Sujet registered successfully");
          this.nomSujet = ""; // Clear the input fields after successful registration
          this.description = "";
          this.dialogRef.close(data); // Close the dialog and return the data
        },
        error => {
          alert("An error has occurred");
          console.error("Registration error:", error);
        }
      );
  }

  onCancel() {
    this.dialogRef.close();
  }
}