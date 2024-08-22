import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-manager',
  templateUrl: './home-manager.component.html',
  styleUrls: ['./home-manager.component.css']
})
export class HomeManagerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        console.log(this.router.url); // Log the current route
        if (this.router.url === '/homeManager/wizard') {
          this.openModal();
        } else {
          this.closeModal();
        }
      });
  }

  openModal() {
    console.log("Opening modal");
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block'; // Show the modal
    }
  }

  closeModal() {
    console.log("Closing modal");
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none'; // Hide the modal
    }
  }
}