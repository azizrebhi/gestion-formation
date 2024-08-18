import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CourseService } from 'src/app/service/course.service';
import { FormateurService } from 'src/app/service/formateur.service';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-demande-formation',
  templateUrl: './demande-formation.component.html',
  styleUrls: ['./demande-formation.component.css']
})
export class DemandeFormationComponent implements OnInit {
  currentStep = 1;
  courses: any[] = [];
  languages: any[] = [];
  formateurs: any[] = [];
  selectedCourseId: number = 0; // Initialize with a default value
  selectedLanguages: number[] = [];

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
    this.selectedCourseId = courseId;
    this.fetchLanguages(courseId);
  }

  fetchLanguages(courseId: number) {
    this.languageService.getLanguagesByCourse(courseId).subscribe((data) => {
      this.languages = data;
      this.formateurs = [];
    });
  }

  fetchFormateurs(languageId: number) {
    return this.formateurService.getFormateursByLanguage(languageId);
  }

  onLanguageChange() {
    if (this.selectedLanguages.length === 0) {
      this.formateurs = [];
      return;
    }

    const requests = this.selectedLanguages.map((languageId) => this.fetchFormateurs(languageId));
    forkJoin(requests).subscribe((results: any[][]) => {
      // Flatten the array of arrays and remove duplicates
      this.formateurs = Array.from(new Set(results.flat()));
    });
  }
}