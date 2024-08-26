
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {

  nomFormation: string = '';
  categorie: string = '';
  duree: number | null = null;
  video: string = '';
  description: string = '';
  level: number | null = null;
  sujetId: number | null = null; // Assuming you have a way to get the sujetId

  constructor(
    private http: HttpClient,
    private dialogRef: MatDialogRef<AddformComponent>
  ) {}

  onAddCourse() {
    const courseData = {
      nomFormation: this.nomFormation,
      categorie: this.categorie,
      duree: this.duree,
      video: this.video,
      description: this.description,
      level: this.level
    };

    // Pass the course data and sujetId to the backend
    this.http.post(`//localhost:8086/academie/formations/addFormation/${this.sujetId}`, courseData)
      .subscribe(
        data => {
          alert("Formation registered successfully");
          this.dialogRef.close(data); // Close the dialog and return the data
        },
        error => {
          alert("An error has occurred");
          console.error("Registration error:", error);
        }
      );
  }

  onCancel() {
    this.dialogRef.close();
  }


}