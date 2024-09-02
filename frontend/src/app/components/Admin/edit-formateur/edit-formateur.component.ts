import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Formateur } from 'src/app/Model/formateur.model'; 
import { Language } from 'src/app/Model/Language.model'; 
import { FormateurService } from 'src/app/service/formateur.service';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-edit-formateur',
  templateUrl: './edit-formateur.component.html',
  styleUrls: ['./edit-formateur.component.css']
})
export class EditFormateurComponent implements OnInit {
  editFormateurForm!: FormGroup;
  languages: Language[] = [];

  constructor(
    private fb: FormBuilder,
    private formateurService: FormateurService,
    private languageService: LanguageService,
    public dialogRef: MatDialogRef<EditFormateurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { formateurId: number }
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadLanguages();
    this.loadFormateur();
  }

  initForm(): void {
    this.editFormateurForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      // Removed selectedLanguages
    });
  }

  loadLanguages(): void {
    this.languageService.getAllLanguages().subscribe(
      (data: Language[]) => {
        console.log('Fetched languages:', data);
        this.languages = data;  // Assign fetched data to the languages array
      },
      error => {
        console.error('Error fetching languages', error);
      }
    );
  }

  loadFormateur(): void {
    this.formateurService.getFormateurById(this.data.formateurId).subscribe(
      formateur => {
        console.log('Fetched Formateur:', formateur);
        this.editFormateurForm.patchValue({
          name: formateur.name,
          email: formateur.email,
          telephone: formateur.telephone,
          adresse: formateur.adresse,
          // Removed selectedLanguages patch
        });
      },
      error => {
        console.error('Error fetching formateur', error);
      }
    );
  }

  updateFormateur(): void {
    if (this.editFormateurForm.valid) {
      const formData = this.editFormateurForm.value;

      // Create the Formateur object without selectedLanguages
      const formateurToUpdate: Formateur = {
        id: this.data.formateurId,
        name: formData.name,
        email: formData.email,
        telephone: formData.telephone,
        adresse: formData.adresse,
        languages: [] // Placeholder if you have no languages to send
      };

      const languageId = 1; // Replace with actual logic to get the language ID

      // Send update request to backend with the new parameters
      this.formateurService.updateFormateur(this.data.formateurId, languageId, formateurToUpdate).subscribe(
        () => {
          this.dialogRef.close(true); // Indicate successful update
        },
        error => {
          console.error('Error updating formateur', error);
        }
      );
    }
}
  cancel(): void {
    this.dialogRef.close(); // Close the dialog without making changes
  }
}