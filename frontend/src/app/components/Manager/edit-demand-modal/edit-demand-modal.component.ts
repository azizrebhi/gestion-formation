import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import { Demand } from 'src/app/Model/demand.model';
import { Demande } from 'src/app/Model/demande.model';
import { DemandeService } from 'src/app/service/demande.service';

@Component({
  selector: 'app-edit-demand-modal',
  templateUrl: './edit-demand-modal.component.html',
  styleUrls: ['./edit-demand-modal.component.css']
})
export class EditDemandModalComponent implements OnInit {
  editDemandForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private demandeService: DemandeService,
    public dialogRef: MatDialogRef<EditDemandModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { demand: Demande }
  ) {
    this.editDemandForm = this.fb.group({
      title: [data.demand.title, Validators.required],
      team: [data.demand.team, Validators.required],
      startDate: [data.demand.startDate, Validators.required],
      endDate: [data.demand.endDate, Validators.required],
      online: [data.demand.online],
      presentiel: [data.demand.presentiel]
    });
  }

  ngOnInit(): void {}

  updateDemand(): void {
    if (this.editDemandForm.valid) {
      const updatedDemand: Demande = {
        ...this.data.demand,
        ...this.editDemandForm.value
      };
  
      // Ensure ID is a number, which maps to Long in Java
      const demandId: number = Number(this.data.demand.id);
  
      this.demandeService.updateDemande(demandId, updatedDemand).subscribe(
        response => {
          console.log('Demand updated successfully:', response);
          this.dialogRef.close(true); // Close the dialog and pass true to indicate success
        },
        error => {
          console.error('Error updating demand:', error);
        }
      );
    }
  }
  

  cancel(): void {
    this.dialogRef.close(false); // Close the dialog without making changes
  }
}