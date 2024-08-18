import { Component, Input } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CourseService } from 'src/app/service/course.service';
import { FormateurService } from 'src/app/service/formateur.service';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-multi-step-wizard',
  templateUrl: './multi-step-wizard.component.html',
  styleUrls: ['./multi-step-wizard.component.css']
})
export class MultiStepWizardComponent {
 
  courses: any[] = [];
  languages: any[] = [];
  formateurs: any[] = [];
  selectedCourseId: number = 0;
  selectedLanguages: number[] = [];
  selectedFormateurId: number | null = null; // Track the selected formateur ID
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
    private formateurService: FormateurService
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
      }
  );
}
onLanguageChange() {
  if (this.selectedLanguages.length === 0) {
      this.formateurs = [];
      return;
  }

  const requests = this.selectedLanguages.map((languageId) =>
      this.formateurService.getFormateursByLanguage(languageId)
  );

  forkJoin(requests).subscribe(
      (results: any[][]) => {
          this.formateurs = Array.from(new Set(results.flat()));
      },
      (error) => {
          console.error("Error fetching formateurs:", error); // Log any errors
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
      const formationRequest = {
        ...this.formation,
        selectedFormateurId: this.selectedFormateurId // Include the selected formateur in the submission
      };
      console.log('Formation requested:', formationRequest);
      // Handle form submission here
    } else {
      console.log('Please select a formateur before submitting.');
    }
  }
}