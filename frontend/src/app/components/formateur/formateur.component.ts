import { Component, OnInit } from '@angular/core';
import { Formateur } from "../../formateur";
import { FormateurService } from "../../formateur.service";

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  public formateurs: Formateur[] = [];
  public newFormateur: Formateur = { id: 1, name: '', email: '', tel: 0 };
  isAdding = false;
  editingIndex: number | null = null;

  constructor(private formateurService: FormateurService) {}

  ngOnInit() {
    this.getFormateurs();
  }

  getFormateurs(): void {
    this.formateurService.getFormateur().subscribe((data: Formateur[]) => {
      this.formateurs = data;
    });
  }

  showAddForm() {
    this.isAdding = true;
  }

  addFormateur() {
    if (this.newFormateur.name && this.newFormateur.email) {
      this.formateurService.addFormateur(this.newFormateur).subscribe(() => {
        alert('Formateur added successfully');
        this.formateurs.push({ ...this.newFormateur });
        this.newFormateur = { id: 0, name: '', email: '', tel: 0 }; // Reset the form
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
    if (this.editingIndex !== null) {
      const formateurToUpdate = this.formateurs[this.editingIndex];
      this.formateurService.updateFormateur(formateurToUpdate).subscribe(() => {
        alert('Formateur updated successfully');
        this.editingIndex = null;
      });
    }
  }

  deleteFormateur(id:number,index: number) {
    this.formateurService.deleteFormateur(id).subscribe(() => {
      alert('Formateur deleted successfully');
      this.formateurs.splice(index, 1);
      if (this.editingIndex === index) {
        this.editingIndex = null;
      }
    });
  }
}
