import { Component } from '@angular/core';

interface Testimonial {
    urlImage: string,
    name: string,
    position: string,
    company: string,
    feedback: string,
}

type DataTestimonials = Testimonial[];

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {


  testimonials:DataTestimonials = [
    {
      urlImage: 'assets/images/testimonials/user-1.webp',
      name: 'Paublo Dybala',
      position: 'CEO',
      company: 'IBM Global',
      feedback: 'Nerm - A Developer with the creativity, professional and master of code. Much more than what I´m expect. High quality product & flexible price. Recommended!.'
    },
    {
      urlImage: 'assets/images/testimonials/user-2.webp',
      name: 'Nombre 2',
      position: 'Puesto 2',
      company: 'Compañía 2',
      feedback: 'Otro testimonio.'
    },
    {
      urlImage: 'assets/images/testimonials/user-3.webp',
      name: 'Nombre 3',
      position: 'Puesto 3',
      company: 'Compañía 3',
      feedback: 'Otro testimonio.'
    }
  ];

  currentIndex = 0;

  previousTestimonial() {
    this.currentIndex = (this.currentIndex === 0) ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex === this.testimonials.length - 1) ? 0 : this.currentIndex + 1;
  }

}
