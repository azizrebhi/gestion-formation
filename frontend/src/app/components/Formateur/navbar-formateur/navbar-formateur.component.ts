import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar-formateur',
  templateUrl: './navbar-formateur.component.html',
  styleUrls: ['./navbar-formateur.component.css']
})
export class NavbarFormateurComponent {
  @ViewChild('sidebar', { static: true }) sidebarRef!: ElementRef;

  toggleSidebar() {
    this.sidebarRef.nativeElement.classList.toggle('closed');
  }
}
