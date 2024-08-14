import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  showModal = false;
  showAddFormationModal = false;
  reservation: any = {
    startTime: '',
    endTime: '',
    formateur: null
  };
  formations: any[] = [
    { id: 1, name: 'Formation A' },
    { id: 2, name: 'Formation B' }
  ];
  formateurs: any[] = [
    { id: 1, name: 'Formateur X' },
    { id: 2, name: 'Formateur Y' }
  ];
  selectedFormation: any = null;
  newFormation: any = { name: '' };

  constructor() {}

  ngOnInit() {}

  onFormationChange(event: any) {
    const formationId = event.target.value;
    // Simulate formateur loading based on selected formation
    if (formationId === '1') {
      this.formateurs = [
        { id: 1, name: 'Formateur X' },
        { id: 2, name: 'Formateur Y' }
      ];
    } else if (formationId === '2') {
      this.formateurs = [
        { id: 3, name: 'Formateur Z' },
        { id: 4, name: 'Formateur W' }
      ];
    }
  }

  onSubmit() {
    console.log('Reservation submitted:', this.reservation);
    this.closeModal();
    // Handle form submission here
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  openAddFormationModal() {
    this.showAddFormationModal = true;
  }

  closeAddFormationModal() {
    this.showAddFormationModal = false;
  }

  addFormation() {
    console.log('New Formation added:', this.newFormation);
    // Simulate adding the new formation
    this.formations.push({ id: this.formations.length + 1, name: this.newFormation.name });
    this.closeAddFormationModal();
  }
}