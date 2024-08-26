import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Formateur } from 'src/app/Model/formateur.model';
import { FormateurService } from 'src/app/service/formateur.service';
import { InvitationComponent } from '../invitation/invitation.component';
import * as bootstrap from 'bootstrap';
import { AddFormateurComponent } from '../add-formateur/add-formateur.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditFormateurComponent } from '../edit-formateur/edit-formateur.component';

@Component({
  selector: 'app-list-formateurs',
  templateUrl: './list-formateurs.component.html',
  styleUrls: ['./list-formateurs.component.css']
})
export class ListFormateursComponent implements OnInit {
  formateurs: Formateur[] = [];
  selectedFormateurId: number | null = null;

 
  constructor(private formateurService: FormateurService
    ,private dialog: MatDialog,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadFormateurs();
    
  }

  loadFormateurs(): void {
    this.formateurService.getAllFormateurs().subscribe(
      (data: Formateur[]) => {
        this.formateurs = data;
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
          this.loadFormateurs(); // Refresh the list
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
      data: { formateur }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadFormateurs(); // Recharge la liste des formateurs si le dialogue a été fermé avec succès
      }
    });
  }

  deleteSelected(): void {
    // Implement bulk delete functionality if needed
  }

  addNewFormateur(): void {
    console.log('Add New Employee');
    // Implement logic to add a new employee
  }
    onDemandeClick(formateurId: number): void {
    this.selectedFormateurId = formateurId;

    // Use the Bootstrap modal API to show the modal
    const modalElement = document.getElementById('staticBackdrop4');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  onInvitationSent(): void {
    this.selectedFormateurId = null;
  }
  openAddFormateurDialog(): void {
    const dialogRef = this.dialog.open(AddFormateurComponent, {
      width: '600px',
      data: {} // Pass any data if needed
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadFormateurs(); // Reload the list of formateurs
      }
    });
  }
  

   
}

