import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Formateur } from 'src/app/Model/formateur.model';
import { FormateurService } from 'src/app/service/formateur.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddFormateurComponent } from '../add-formateur/add-formateur.component';
import { EditFormateurComponent } from '../edit-formateur/edit-formateur.component';

@Component({
  selector: 'app-list-formateurs',
  templateUrl: './list-formateurs.component.html',
  styleUrls: ['./list-formateurs.component.css']
})
export class ListFormateursComponent implements OnInit {
  formateurs: Formateur[] = [];

  constructor(
    private formateurService: FormateurService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadFormateurs();
  }

  loadFormateurs(): void {
    this.formateurService.getAllFormateurs().subscribe(
      (data: Formateur[]) => {
        console.log('Formateurs fetched:', data);
        this.formateurs = data; // Directly assign the fetched data
      },
      error => {
        console.error('Error fetching formateurs', error);
      }
    );
  }

  

  deleteFormateur(formateur: Formateur): void {
    if (formateur.id) {
      this.formateurService.deleteFormateur(formateur.id).subscribe(
        () => {
          this.loadFormateurs(); // Refresh the list after deletion
          this.snackBar.open('Formateur supprimé avec succès', 'Fermer', { duration: 3000 });
        },
        error => {
          console.error('Error deleting formateur', error);
        }
      );
    }
  }

  editFormateur(formateur: Formateur): void {
    const dialogRef = this.dialog.open(EditFormateurComponent, {
      width: '600px',
      data: { formateurId: formateur.id }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadFormateurs(); // Refresh the list after editing
      }
    });
  }

  openAddFormateurDialog(): void {
    const dialogRef = this.dialog.open(AddFormateurComponent, {
      width: '600px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadFormateurs(); // Reload the list of formateurs
      }
    });
  }
}
