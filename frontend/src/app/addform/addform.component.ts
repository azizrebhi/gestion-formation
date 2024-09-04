import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {

  nomFormation: string = '';
  duree: number | null = null;
  video: string = '';
  description: string = '';
  level: number | null = null;
  categories: string[] = [];
  selectedCategorie: string = '';

  constructor(
    private http: HttpClient,
    private dialogRef: MatDialogRef<AddformComponent>
  ) {}

  ngOnInit(): void {
    this.fetchSujetNames();
  }

  fetchSujetNames() {
    this.http.get<string[]>(`http://localhost:8086/academie/sujets/getNames`)
      .subscribe(
        (data: string[]) => {
          this.categories = data;
          console.log("Fetched Sujet Names:", this.categories);
        },
        error => {
          console.error("Error fetching Sujet names:", error);
        }
      );
  }

  onAddCourse() {
    const courseData = {
      nomFormation: this.nomFormation,
      duree: this.duree,
      video: this.video,
      description: this.description,
      level: this.level,
    };

    const selectedCategorie = this.selectedCategorie;

    this.http.post(`http://localhost:8086/academie/formations/addFormation/${selectedCategorie}`, courseData)
      .subscribe(
        data => {
          alert("Formation registered successfully");
          this.dialogRef.close(data);
          
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
