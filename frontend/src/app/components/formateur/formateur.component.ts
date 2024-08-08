import { Component, OnInit } from '@angular/core';
import { Formateur } from '../../formateur';
import { FormateurService } from '../../formateur.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  public formateurs$: Observable<Formateur[]>; // Observable to hold formateurs
  public newFormateur: Formateur = { id: 0, name: '', email: '', tel: 0 };
  isAdding = false;
  editingIndex: number | null = null;

  constructor(private formateurService: FormateurService) {}

  ngOnInit() {
    this.formateurs$ = this.formateurService.getFormateur(); // Initialize formateurs$ as an Observable
  }

  showAddForm() {
    this.isAdding = true;
  }

  addFormateur() {
    if (this.newFormateur.name && this.newFormateur.email && this.newFormateur.tel) {
      this.formateurService.addFormateur(this.newFormateur).subscribe(
        (createdFormateur) => {
          console.log('Formateur added:', createdFormateur);
          this.newFormateur = { id: 0, name: '', email: '', tel: 0 }; // Reset the form
          this.isAdding = false;
          this.refreshFormateurs(); // Refresh the list after adding
        },
        (error) => {
          console.error('Error adding formateur:', error);
        }
      );
    }
  }

  cancelAdd() {
    this.isAdding = false;
    this.newFormateur = { id: 0, name: '', email: '', tel: 0 };
  }

  startEditing(index: number) {
    this.editingIndex = index;
  }

  saveFormateur(formateur: Formateur) {
    this.formateurService.updateFormateur(formateur).subscribe(
      (updatedFormateur) => {
        console.log('Formateur updated:', updatedFormateur);
        this.editingIndex = null;
        this.refreshFormateurs(); // Refresh the list after updating
      },
      (error) => {
        console.error('Error updating formateur:', error);
      }
    );
  }

  deleteFormateur(id: number) {
    this.formateurService.deleteFormateur(id).subscribe(() => {
      console.log('Formateur deleted');
      this.refreshFormateurs(); // Refresh the list after deletion
    });
  }

  private refreshFormateurs() {
    this.formateurs$ = this.formateurService.getFormateur(); // Re-fetch the formateurs
  }
}
