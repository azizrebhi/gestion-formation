
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddformComponent } from '../addform/addform.component';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent  {
  FormationArray: any[] = [];

  nomFormation: string = '';
  categorie: string = '';
  duree: number = 0;
  video: string = '';
  description: string = '';
  level: number = 0;

  constructor(private http: HttpClient,public dialog : MatDialog) {
    this.getAllFormations(0) ; 
  }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(AddformComponent, {
      width: '500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result) {
            console.log('Form data:', result);
            this.getAllFormations(0) ;
            // Handle the form data here (e.g., send it to a service or API)
        }
    });
}


  getAllFormations(sujetId: number) {
    this.http.get<any[]>(`http://localhost:8086/academie/formations/getFormations`)
      .subscribe((resultData: any[]) => {
        this.FormationArray = resultData.map(formation => ({
          idFormation: formation[0],
          nomFormation: formation[1],
          categorie: formation[2],
          duree: formation[3],
          description: formation[4],
          level: formation[5],
          sujetId: formation[6]
        }));
      });
  }
  
  
  

  registerFormation() {
    let formation = {
      nomFormation: this.nomFormation,
      categorie: this.categorie,
      duree: this.duree,
      video: this.video,
      description: this.description,
      level: this.level,
     
    };
  
    this.http.post('http://localhost:8086/academie/formations/addFormation', formation)
      .subscribe(
        data => {
          alert("Formation registered Successfully");
          this.nomFormation = "";
          this.categorie = "";
          this.duree = 0;
          this.video = "";
          this.description = "";
          this.level = 0;
          this.getAllFormations(0); // Refresh list after adding a new formation
        },
        error => {
          alert("An error has occurred");
          console.error("Registration error:", error);
        }
      );
  }
  deleteFormation(formationId: number) {
    this.http.delete(`//localhost:8086/academie/formations/deleteById/${formationId}`, { responseType: 'text' }) // Expecting a text response
      .subscribe(
        data => {
          alert("Formation deleted successfully");
          this.getAllFormations(0); // Refresh the list after deletion
        },
        error => {
          alert("An error occurred while deleting the formation");
          console.error("Deletion error:", error);
        }
      );
  }
  
  addFormation() {
    // Logic for adding a new formation, could involve routing to a form page or opening a modal
    alert("Add Formation button clicked");
  }
  
  
  


}