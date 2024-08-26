
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swiper, { Navigation } from 'swiper';
import { MatDialog } from '@angular/material/dialog';
import { AddcarouselmodalComponent } from '../addcarouselmodal/addcarouselmodal.component';

@Component({
  selector: 'app-sujet-cards',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit {
  SujetArray: any[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {
    this.getAllSujets();
  }

  openAddCourseModal() {
    const dialogRef = this.dialog.open(AddcarouselmodalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllSujets(); // Refresh the list
      }
    });
  }

  ngOnInit(): void {
    Swiper.use([Navigation]); // Initialize Swiper with Navigation module
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
    this.http.get("http://localhost:8086/academie/sujets/getSujets")
      .subscribe((resultData: any) => {
        this.SujetArray = resultData;
      });
  }

  deleteSujet(id: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.http.delete( "//localhost:8086/academie/sujets/deleteSujet/${id}")
        .subscribe(
          response => {
            alert('Category deleted successfully');
            this.getAllSujets(); // Refresh the list after deletion
          },
          error => {
            alert('An error occurred while deleting the category');
            console.error('Delete error:', error);
          }
        );
    }
  }
}