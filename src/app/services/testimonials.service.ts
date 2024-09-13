import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Testimonials } from '../interfaces/testimonials.interface';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  cargada = false;
  dataTestimonial: Testimonials[] = [];

  constructor( private http: HttpClient ) {
    this.getTestimonialsData();
  }

  private getTestimonialsData() {
    this.http.get<Testimonials[]>('https://portfolio-web-bd37a-default-rtdb.firebaseio.com/testimonials.json')
      .subscribe( (response: Testimonials[]) => {
        this.dataTestimonial = response;
        this.cargada = true;
      })
  }
}
