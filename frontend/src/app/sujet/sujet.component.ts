import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swiper from 'swiper';
import { Navigation } from 'swiper';




@Component({
  selector: 'app-sujet-cards',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})

export class SujetComponent implements OnInit {
  SujetArray : any[] =[] ;

  nomSujet: string ="" ; 
  imageSujet: string="" ;

  ngOnInit(): void {
    Swiper.use([Navigation]); // Initialize Swiper with Navigation module
    const swiper = new Swiper('.swiper-container', {
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }


  constructor(private http : HttpClient){
    this.getAllSujets(); 
  }



  registerSujet(){


    let sujet ={
      nomSujet : this.nomSujet,
      imageSujet : this.imageSujet
    }

    this.http.post('http://localhost:8080/sujets/addSujet',sujet)
      .subscribe(
        data =>{
          alert("Sujet registered Successfully ");
          console.log(data);

          this.nomSujet = "" ; 
          this.imageSujet = "";
        },
        error =>{
          alert (" An error has occured ")
          console.error("Registration  error :",error);
        }
      );


  }


  getAllSujets(){
    this.http.get("http://localhost:8080/sujets/getSujets")
    .subscribe((resultData : any)=>{
      
      this.getAllSujets(); 
      this.SujetArray = resultData; 

    }
  );
  }

  


}
