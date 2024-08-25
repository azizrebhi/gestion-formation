import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddformComponent } from '../addform/addform.component';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
  // Static list of courses
  FormationArray = [
    {
      idFormation: 1,
      nomFormation: 'Web Development',
      categorie: 'Programming',
      duree: 40,
      description: 'Learn how to build websites and web applications.',
      level: 1,
      sujetId: 101,
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Example video link
    },
    {
      idFormation: 2,
      nomFormation: 'Data Science',
      categorie: 'Data Analysis',
      duree: 60,
      description: 'Explore data analysis, visualization, and machine learning.',
      level: 2,
      sujetId: 102,
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Example video link
    },
    {
      idFormation: 3,
      nomFormation: 'Machine Learning',
      categorie: 'Artificial Intelligence',
      duree: 50,
      description: 'In-depth course on machine learning algorithms and techniques.',
      level: 3,
      sujetId: 103,
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Example video link
    }
    // Add more courses as needed
  ];

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddformComponent, {
      width: '500px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Form data:', result);
        // Handle the form data here (e.g., send it to a service or API)
      }
    });
  }

  deleteFormation(formationId: number) {
    // Note: In a static context like this, you'd typically remove the course from the static array manually
    const index = this.FormationArray.findIndex(f => f.idFormation === formationId);
    if (index >= 0) {
      this.FormationArray.splice(index, 1);
      alert("Formation deleted successfully");
    } else {
      alert("Formation not found");
    }
  }
}