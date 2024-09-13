import { Component } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials.service';

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

  constructor( public _testimonialService: TestimonialsService ) {
  }


  testimonials:DataTestimonials = [
    {
      urlImage: 'assets/images/testimonials/user-1.webp',
      name: 'Jonathan Andrade',
      position: 'Sr .Net Full Stack',
      company: 'VIQ Solutions',
      feedback: 'I had the pleasure of working with Nahum on the same software development team and I can say that he is a dedicated engineer who adapts, strives, learns and, above all, never gives up. He is a dedicated person with excellent technical skills.'
    },
    {
      urlImage: 'assets/images/testimonials/user-2.webp',
      name: 'Anael Hernández Rivera',
      position: '.Net / Angular Full Stack',
      company: 'Apex Systems',
      feedback: 'Nahum is a very responsible and dedicated person in his work. He is someone who will always make you smile and treat you in a friendly way. He has great skill and experience in the world of UI development and frontend skills.'
    },
    {
      urlImage: 'assets/images/testimonials/user-3.webp',
      name: 'Aaron Estrada',
      position: 'Sr Consultant',
      company: 'Apex Systems',
      feedback: 'A flexible young man who adapts to the needs of his client. An excellent companion. A professional with strong frontend skills with very good communication skills.'
    },
    {
      urlImage: 'assets/images/testimonials/user-4.webp',
      name: 'Amanda Corea',
      position: 'Manager Founder/Director',
      company: 'Crezco Foundation',
      feedback: 'Nahum is an excellent animator and easy to work with. He is innovative, always studying the latest technique, consistent in returning a quality product, and a hard worker who will go above and beyond.'
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
