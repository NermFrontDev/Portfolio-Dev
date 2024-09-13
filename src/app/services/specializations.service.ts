import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specializations } from '../interfaces/specialization.interface';

@Injectable({
  providedIn: 'root'
})
export class SpecializationsService {

  cargada = false;
  dataSpecs: Specializations [] = [];

  constructor( public http: HttpClient ) {
    this.getSpecsData();
  }

  private getSpecsData() {
    this.http.get<Specializations[]>('https://portfolio-web-bd37a-default-rtdb.firebaseio.com/specializations.json')
      .subscribe( (response: Specializations[]) => {
        this.dataSpecs = response;
        this.cargada = true;
        /* console.log('Specs Data:', response); */
      })
  }
}
