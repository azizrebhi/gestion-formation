import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormateurService } from 'src/app/service/formateur.service';
import { LanguageService } from 'src/app/service/language.service';
import { Formateur } from 'src/app/Model/formateur.model'; 
import { Language } from 'src/app/Model/Language.model'; 


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
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'Unselect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
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
      selectedLanguages: [[], Validators.required] // Initialize as an empty array, set as required
    });
  }

  ngOnInit(): void {
    this.loadLanguages(); // Ensure this method is called to load languages
  }
  
 // AddFormateurComponent.ts
loadLanguages(): void {
  this.languageService.getAllLanguages().subscribe(
    (data: Language[]) => {
      console.log('Fetched languages:', data);  // Check if 'name' property is present
      this.languages = data;  // Assign fetched data to the languages array
    },
    error => {
      console.error('Error fetching languages', error);
    }
  );
}


formateurAjoute() {
  if (this.addFormateurForm.valid) {
    const formData = this.addFormateurForm.value;
    const formateur: Formateur = {
      name: formData.name,
      email: formData.email,
      telephone: formData.telephone,
      adresse: formData.adresse,
      selectedLanguages: [] // Languages are handled by backend, so this can be empty
    };

    // Ensure at least one language is selected
    if (formData.selectedLanguages.length === 0) {
      alert('Please select at least one language.');
      return;
    }

    // Get the first selected language ID
    const selectedLanguageId = formData.selectedLanguages[0].id;

    this.formateurService.createFormateur(selectedLanguageId, formateur).subscribe(
      response => {
        console.log('Formateur créé avec succès', response);
        this.dialogRef.close(response);
        alert('Formateur ajouté avec succès!');
      },
      error => {
        console.error('Erreur lors de la création du formateur', error);
        alert('Erreur lors de l\'ajout du formateur.');
      }
    );
  }
}




  closeDialog(): void {
    this.dialogRef.close(false);
  }
}