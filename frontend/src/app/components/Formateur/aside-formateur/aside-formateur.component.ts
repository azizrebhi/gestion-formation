import { Component, EventEmitter,ElementRef, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-aside-formateur',
  templateUrl: './aside-formateur.component.html',
  styleUrls: ['./aside-formateur.component.css']
})
export class AsideFormateurComponent {
  @ViewChild('sidebar', { static: true }) sidebarRef!: ElementRef;

  toggleSidebar() {
    this.sidebarRef.nativeElement.classList.toggle('closed');
  }
}