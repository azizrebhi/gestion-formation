import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
import { NotificationService } from 'src/app/service/notification.service'; // Import notification service

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('sidebar', { static: true }) sidebarRef!: ElementRef;
  user: User | null = null;
  showNotifications: boolean = false; // Variable for toggling notifications

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    public notificationService: NotificationService // Inject notification service
  ) { }

  ngOnInit(): void {
    this.user = this.userService.currentUser();
  }

  toggleSidebar() {
    this.sidebarRef.nativeElement.classList.toggle('closed');
  }

  onLogout(): void {
    this.authService.logout().subscribe(
      response => {
        console.log('Déconnexion réussie:', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Erreur lors de la déconnexion:', error);
      }
    );
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications; // Toggle notifications display
  }
}