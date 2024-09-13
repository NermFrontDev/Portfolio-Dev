import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Education } from '../interfaces/education.interface';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  cargada = false;
  dataEducation: Education[] = [];

  constructor( public http: HttpClient ) {
    this.getEducation();
  }

  getEducation() {
    this.http.get<Education[]>('https://portfolio-web-bd37a-default-rtdb.firebaseio.com/education.json')
      .subscribe( (response: Education[]) => {
        this.dataEducation = response;
        this.cargada = true;
        /* console.log('Education Data:', response); */
      } )
  }
}
