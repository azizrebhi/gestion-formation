import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormateurService } from 'src/app/service/formateur.service';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent {
  addFormateurForm: FormGroup;

  constructor(
    private formateurService: FormateurService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddFormateurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { formateurId: number }
  ) {
    this.addFormateurForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['test33', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required]
    });
  }

  formateurAjoute() {
    if (this.addFormateurForm.valid) {
      const formateur = this.addFormateurForm.value;
      this.formateurService.createFormateur(formateur).subscribe(
        response => {
          // Handle successful formateur creation
          console.log('Formateur created successfully', response);
        },
        error => {
          // Handle formateur creation error
          console.error('Error creating formateur', error);
        }
      );
    }
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }
}