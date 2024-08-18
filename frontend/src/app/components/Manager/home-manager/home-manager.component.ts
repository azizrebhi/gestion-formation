import { Component } from '@angular/core';

@Component({
  selector: 'app-home-manager',
  templateUrl: './home-manager.component.html',
  styleUrls: ['./home-manager.component.css']
})
export class HomeManagerComponent {
  openModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block'; // Show the modal
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none'; // Hide the modal
    }
  }
}
