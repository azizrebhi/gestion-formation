import { Component, Input } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Demand } from 'src/app/Model/demand.model';
import { Formateur } from 'src/app/Model/formateur.model';
import { CourseService } from 'src/app/service/course.service';
import { DemandeService } from 'src/app/service/demande.service';
import { FormateurService } from 'src/app/service/formateur.service';
import { LanguageService } from 'src/app/service/language.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-multi-step-wizard',
  templateUrl: './multi-step-wizard.component.html',
  styleUrls: ['./multi-step-wizard.component.css']
})
export class MultiStepWizardComponent {
 
  courses: any[] = [];
  languages: any[] = [];
  formateurs: Formateur[] = [];
  selectedFormateurId: number | null = null;
  selectedLanguages: number[] = []; // This will hold the IDs for selected languages

  selectedCourseId: number = 0;
  
  currentStep = 0;
  steps = [
    { title: 'Step 1', content: 'Formation Details' },
    { title: 'Step 2', content: 'Choose Course and Language' },
    { title: 'Step 3', content: 'Choose Formateur' }, // Updated to reflect new step title
    { title: 'Step 4', content: 'Choose Delivery Method' }, // Add if you have delivery methods
  ];

  formation = {
    title: '',
    team: '',
    startDate: '',
    endDate: '',
    online: false,
    presentiel: false
  };

  constructor(
    private courseService: CourseService,
    private languageService: LanguageService,
    private formateurService: FormateurService,
    private demandeService: DemandeService, // Inject the new service
    private notificationService: NotificationService // Inject NotificationService
  ) {}
  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courseService.getAllCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  onCourseChange(courseId: number) {
    console.log("Selected Course ID:", courseId);  // Log the selected course ID
    this.selectedCourseId = courseId;
    this.selectedLanguages = []; // Reset selected languages on course change
    this.fetchLanguages(courseId); // Fetch associated languages
}

fetchLanguages(courseId: number) {
  this.languageService.getLanguagesByCourse(courseId).subscribe(
    (data) => {
      console.log("Fetched Languages:", data);  // Log the fetched languages
      this.languages = data;
      this.formateurs = []; // Reset formateurs when languages change
      this.selectedFormateurId = null; // Reset selected formateur ID when languages change
    },
    (error) => {
      console.error("Error fetching languages:", error);  // Log any errors
      this.languages = []; // Ensure languages are reset on error
    }
  );
}


onLanguageChange() {
  if (this.selectedLanguages.length === 0) {
    this.formateurs = [];
    this.selectedFormateurId = null;
    return;
  }

  const requests = this.selectedLanguages.map(languageId => 
    this.formateurService.getFormateursByLanguage(languageId) // Assuming this returns Observable<Formateur[]>
  );

  forkJoin(requests).subscribe(
    (results: Formateur[][]) => {
      console.log("Formateurs response for selected languages:", results);
      const formateursSet = new Set<Formateur>();
      results.forEach(result => {
        result.forEach(formateur => {
          formateursSet.add(formateur);
        });
      });
      this.formateurs = Array.from(formateursSet);
      console.log("Updated Formateurs:", this.formateurs);
    },
    (error) => {
      console.error("Error fetching formateurs:", error);
      this.formateurs = [];
    }
  );
}

  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prev() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  submit() {
    if (this.selectedFormateurId !== null) {
        const formationRequest: Demand = {
            title: this.formation.title,
            team: this.formation.team,
            startDate: this.formation.startDate,
            endDate: this.formation.endDate,
            online: this.formation.online,
            presentiel: this.formation.presentiel,
            selectedCourseId: this.selectedCourseId,
            selectedLanguages: this.selectedLanguages,
            selectedFormateurId: this.selectedFormateurId
        };

        this.demandeService.submitDemande(formationRequest).subscribe(
            response => {
                console.log('Formation request submitted:', response);
                this.notifyAdmin(); // Notify admin
                // Optionally, display a success message or reset the form here
            },
            error => {
                console.error('Error submitting formation request:', error);
            }
        );
    } else {
        console.log('Please select a formateur before submitting.');
    }}
  notifyAdmin() {
    // Subscribe to notifications here if not already done
    this.notificationService.getNotifications().subscribe(notification => {
      console.log('New notification received:', notification);
    });
  }
  toggleLanguageSelection(languageId: number): void {
    const index = this.selectedLanguages.indexOf(languageId);
    if (index > -1) {
      // If the language ID is already in the array, remove it
      this.selectedLanguages.splice(index, 1);
    } else {
      // If the language ID is not in the array, add it
      this.selectedLanguages.push(languageId);
    }
  }

  isLanguageSelected(languageId: number): boolean {
    return this.selectedLanguages.includes(languageId);
  }
  
}