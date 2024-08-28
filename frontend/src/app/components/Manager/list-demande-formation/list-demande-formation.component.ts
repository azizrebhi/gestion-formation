import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DemandeService } from 'src/app/service/demande.service';
import { CourseService } from 'src/app/service/course.service';
import { LanguageService } from 'src/app/service/language.service';
import { FormateurService } from 'src/app/service/formateur.service'; // Import if you have a formateur service
import { Demand} from 'src/app/Model/demand.model';
import { MultiStepWizardComponent } from '../multi-step-wizard/multi-step-wizard.component';
import { EditDemandModalComponent } from '../edit-demand-modal/edit-demand-modal.component';

@Component({
  selector: 'app-list-demande-formation',
  templateUrl: './list-demande-formation.component.html',
  styleUrls: ['./list-demande-formation.component.css']
})
export class ListDemandeFormationComponent implements OnInit {
  demandes: any[] = [];
  courses: any[] = []; // Adjust type as needed
  languages: any[] = []; // Adjust type as needed
  formateurs: any[] = []; // Adjust type as needed

  constructor(
    private demandeService: DemandeService,
    private courseService: CourseService,
    private languageService: LanguageService,
    private formateurService: FormateurService, // Include if using formateur service
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadDemandes();
    this.loadCourses();
    this.loadLanguages();
    this.loadFormateurs(); // Load formateurs if needed
  }

  loadDemandes(): void {
    this.demandeService.getAllDemandes().subscribe(
      (data: any[]) => {
        this.demandes = data;
      },
      error => {
        console.error('Error fetching demandes', error);
      }
    );
  }

  loadCourses(): void {
    this.courseService.getAllCourses().subscribe(
      (data: any[]) => {
        this.courses = data;
      },
      error => {
        console.error('Error fetching courses', error);
      }
    );
  }

  loadLanguages(): void {
    this.languageService.getAllLanguages().subscribe(
      (data: any[]) => {
        this.languages = data;
      },
      error => {
        console.error('Error fetching languages', error);
      }
    );
  }

  loadFormateurs(): void {
    this.formateurService.getAllFormateurs().subscribe(
      (data: any[]) => {
        this.formateurs = data;
      },
      error => {
        console.error('Error fetching formateurs', error);
      }
    );
  }

  getCourseName(courseId: number): string {
    const course = this.courses.find(c => c.id === courseId);
    return course ? course.name : 'Unknown';
  }

  getLanguageNames(languageIds: number[]): string {
    return languageIds
      .map(id => {
        const lang = this.languages.find(l => l.id === id);
        return lang ? lang.name : 'Unknown';
      })
      .join(', ');
  }

  getFormateurName(formateurId: number): string {
    const formateur = this.formateurs.find(f => f.id === formateurId);
    return formateur ? formateur.name : 'Unknown';
  }

  openAddDemandeDialog(): void {
    const dialogRef = this.dialog.open(MultiStepWizardComponent, {
      width: '800px',
      data: {} // Pass any data if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadDemandes(); // Reload the list of demandes if needed
      }
    });
  }
  editDemande(demande: Demand): void {
    const dialogRef = this.dialog.open(EditDemandModalComponent, {
      width: '600px',
      data: { demand: demande }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadDemandes(); // Reload the list of demandes if the dialog closed successfully
      }
    });
  }
  deleteDemande(id: number): void {
    if (confirm('Are you sure you want to delete this demand?')) {
      this.demandeService.deleteDemande(id).subscribe(
        () => {
          this.demandes = this.demandes.filter(demande => demande.id !== id);
        },
        error => {
          console.error('Error deleting demande', error);
        }
      );
    }
  }
}
