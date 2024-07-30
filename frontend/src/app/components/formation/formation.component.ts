import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {

  FormationArray: any [] =[] ;

  nomFormation : string="";
  nomFormateur : string="";
  categorie : string="";
  dateDebut : Date= new Date('2024-01-01');
  dateFin : Date=new Date('2024-01-01');
  nombreParticipant : number=0;


  currentFormationId='' ;
  FormationService: any;


  constructor (private http:HttpClient){
    this.getAllFormations();
  }


  register() {

    if (!this.nomFormation || !this.nomFormateur || !this.categorie|| !this.dateDebut|| !this.dateFin|| !this.nombreParticipant) {
      alert("All fields are required!");
      return;
    }

    let formation = {
      nomFormation: this.nomFormation,
      nomFormateur: this.nomFormateur,
      categorie: this.categorie,
      dateDebut: this.dateDebut,
      dateFin: this.dateFin,
      nombreParticipant: this.nombreParticipant,
    };


    this.http.post("http://localhost:8080/addFormation", formation)
      .subscribe(
        data => {
          alert("Student Registered Successfully");
          console.log(data);

          this.nomFormation = "";
          this.nomFormateur = "";
          this.categorie = "";
          this.dateDebut=new Date();
          this.dateFin=new Date();
          this.nombreParticipant=0 ;
        },
        error => {
          alert("An error occurred while registering the student.");
          console.error("Registration error:", error);
        }
      );
  }


  getAllFormations()
  {

    this.http.get("http://localhost:8080/getFormations")

      .subscribe((resultData: any)=>
      {
        this.getAllFormations();
        console.log(resultData);
        this.FormationArray = resultData;
      });
  }



  deleteFormationById(id: number): void {
    this.FormationService.deleteFormation(id).subscribe(
      (      response: any) => {
        alert(response);
        console.log(response);

        // Optionally, refresh the list of formations
        this.loadFormations();
      },
      (      error: any) => {
        alert('Formation not found with id: ' + id);
        console.error('Delete error:', error);
      }
    );


  }

  loadFormations() {
    throw new Error('Method not implemented.');
  }

}
