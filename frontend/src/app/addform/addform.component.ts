import { Component } from '@angular/core';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {
  
  

    nomFormation: string = '';
    categorie: string = '';
    duree: number = 0;
    video: string = '';
    description: string = '';
    level: number = 0;
  
    constructor(){
      console.log('addform component loaded');
    }
   
  }
  


