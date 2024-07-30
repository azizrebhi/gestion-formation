import { Component, OnInit } from '@angular/core';
import { Formateur } from '../../formateur';
import { FormateurService } from '../../formateur.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  public formateurs: Formateur[] = [];
  public newFormateur: Formateur = { id: 0, name: '', email: '', tel: 0 };
  isAdding = false;
  editingIndex: number | null = null;
  constructor(private formateurService: FormateurService) {}
  ngOnInit() {
    this.getFormateurs();
  }

  getFormateurs(): void {
    this.formateurService.getFormateur().subscribe((data: Formateur[]) => {
      this.formateurs = data;
      console.log('Formateurs fetched:', this.formateurs);
    });
  }

  showAddForm() {
    this.isAdding = true;
  }

  addFormateur() {
    if (this.newFormateur.name && this.newFormateur.email && this.newFormateur.tel) {
      this.formateurService.addFormateur(this.newFormateur).subscribe((createdFormateur) => {
        console.log('Formateur added:', createdFormateur);
        this.formateurs.push(createdFormateur);
        this.newFormateur = { id: 0, name: '', email: '', tel: 0}; // Reset the form
        this.isAdding = false;
      });
    }
  }

  cancelAdd() {
    this.isAdding = false;
    this.newFormateur = { id: 0, name: '', email: '', tel: 0 };
  }

  startEditing(index: number) {
    this.editingIndex = index;
  }

  saveFormateur() {
    if (this.editingIndex !== null && this.editingIndex >= 0 && this.editingIndex < this.formateurs.length) {
      const formateurToUpdate = this.formateurs[this.editingIndex];
      console.log('Updating formateur:', formateurToUpdate);
      this.formateurService.updateFormateur(formateurToUpdate).subscribe(
        (updatedFormateur) => {
          console.log('Formateur updated:', updatedFormateur);
          this.formateurs[this.editingIndex!] = updatedFormateur;
          this.editingIndex = null;
        },
        (error) => {
          console.error('Error updating formateur:', error);
        }
      );
    }
  }

  deleteFormateur(id: number, index: number) {
    console.log('Deleting formateur with id:', id);
    this.formateurService.deleteFormateur(id).subscribe(() => {
      console.log('Formateur deleted');
      this.formateurs.splice(index, 1);
      if (this.editingIndex === index) {
        this.editingIndex = null;
      }
    });
  }
}
