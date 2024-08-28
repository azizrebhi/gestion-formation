import { Component, OnInit } from '@angular/core';
import { Demand } from 'src/app/Model/demand.model';
import { NotificationMessage } from 'src/app/Model/notificationMessage.model';
import { DemandeService } from 'src/app/service/demande.service';
import { FormateurService } from 'src/app/service/formateur.service';
import { WebSocketService } from 'src/app/service/web-socket.service';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {
 
   
  notifications: NotificationMessage[] = [];

  constructor(
    private demandeService: DemandeService,
    private formateurService: FormateurService
  ) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.demandeService.getAllDemandes().subscribe(
      (demands: Demand[]) => {
        this.notifications = this.mapDemandsToNotifications(demands);
      },
      error => {
        console.error('Error loading notifications:', error);
      }
    );
  }

  // Maps Demand objects to NotificationMessage objects
  private mapDemandsToNotifications(demands: Demand[]): NotificationMessage[] {
    const notificationMessages: NotificationMessage[] = [];
    
    demands.forEach(demand => {
      this.formateurService.getFormateurById(demand.selectedFormateurId).subscribe(
        formateur => {
          notificationMessages.push({
            title: demand.title,
            team: demand.team,
            startDate: demand.startDate,
            endDate: demand.endDate,
            formateurName: formateur.name, // Add the formateur's name
            online: demand.online,
            presentiel: demand.presentiel
          });
        },
        error => {
          console.error(`Error fetching formateur with ID ${demand.selectedFormateurId}:`, error);
        }
      );
    });

    // Return the notification messages after all requests are complete
    return notificationMessages;
  }}