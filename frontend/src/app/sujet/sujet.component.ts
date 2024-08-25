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
  // Static subjects
  staticSubjects: any[] = [
    { nomSujet: 'Static Subject 1', imageSujet: 'path/to/image1.jpg' },
    { nomSujet: 'Static Subject 2', imageSujet: 'path/to/image2.jpg' },
    { nomSujet: 'Static Subject 3', imageSujet: 'path/to/image3.jpg' },
  ];

  nomSujet: string = "";
  imageSujet: string = "";

  constructor(private http: HttpClient) {
    this.getAllSujets();
  }

  ngOnInit(): void {
    Swiper.use([Navigation]);
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
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
        // Combine static and dynamic data here
        this.SujetArray = [...this.staticSubjects, ...resultData];
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
          this.getAllSujets();
        },
        error => {
          alert("An error has occurred");
          console.error("Registration error:", error);
        }
      );
  }
}