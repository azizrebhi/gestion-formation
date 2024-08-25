import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormateurService } from 'src/app/service/formateur.service';
import { LanguageService } from 'src/app/service/language.service';
import { Formateur } from 'src/app/Model/formateur.model'; // Adjust import based on your project structure
import { Language } from 'src/app/Model/Language.model'; // Adjust import based on your project structure
@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {
  addFormateurForm: FormGroup;
  languages: Language[] = [];
  dropdownSettings = {
    singleSelection: false,
    text: "Select Languages",
    selectAllText: 'Select All',
    unSelectAllText: 'Unselect All',
    enableSearchFilter: true,
    classes: "myclass custom-class"
  };

  constructor(
    private formateurService: FormateurService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddFormateurComponent>,
    private snackBar: MatSnackBar,
    private languageService: LanguageService,
    @Inject(MAT_DIALOG_DATA) public data: { coursId: number, languageId: number }
  ) {
    this.addFormateurForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      selectedLanguages: [[]] // Initialize as an empty array
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  loadLanguages(): void {
    this.languageService.getAllLanguages().subscribe(
      (data: Language[]) => {
        console.log('Fetched languages:', data); // Log the data
        this.languages = data;
      },
      error => {
        console.error('Error fetching languages', error);
      }
    );
  }
  formateurAjoute() {
    if (this.addFormateurForm.valid) {
      const formateur: Formateur = this.addFormateurForm.value;
      const selectedLanguageIds = formateur.selectedLanguages?.map((lang: Language) => lang.id) || [];
  
      this.formateurService.createFormateur(this.data.coursId, selectedLanguageIds, formateur).subscribe(
        response => {
          console.log('Formateur créé avec succès', response);
          this.dialogRef.close(true); // Close the dialog and signal success
          this.snackBar.open('Formateur ajouté avec succès!', 'Close', { duration: 3000 });
        },
        error => {
          console.error('Erreur lors de la création du formateur', error);
          this.snackBar.open('Erreur lors de l\'ajout du formateur.', 'Close', { duration: 3000 });
        }
      );
    }
  }
  

  closeDialog(): void {
    this.dialogRef.close(false);
  }
}
