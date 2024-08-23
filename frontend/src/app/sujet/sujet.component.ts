import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swiper, { Navigation } from 'swiper';

@Component({
  selector: 'app-sujet-cards',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit {
  SujetArray: any[] = [];

  nomSujet: string = "";
  imageSujet: string = "";

  constructor(private http: HttpClient) {
    this.getAllSujets();
  }

  ngOnInit(): void {
    Swiper.use([Navigation]); // Initialize Swiper with Navigation module
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3, // Display 3 slides per view
      spaceBetween: 30, // Space between slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
    });
  }

  getAllSujets() {
    this.http.get("http://localhost:8086/sujets/getSujets")
      .subscribe((resultData: any) => {
        this.SujetArray = resultData;
      });
  }

  registerSujet() {
    let sujet = {
      nomSujet: this.nomSujet,
      imageSujet: this.imageSujet
    };

    this.http.post('http://localhost:8086/sujets/addSujet', sujet)
      .subscribe(
        data => {
          alert("Sujet registered Successfully");
          this.nomSujet = "";
          this.imageSujet = "";
          this.getAllSujets(); // Refresh list after adding a new sujet
        },
        error => {
          alert("An error has occurred");
          console.error("Registration error:", error);
        }
      );
  }
}
