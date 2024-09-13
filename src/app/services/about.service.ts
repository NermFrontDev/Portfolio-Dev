import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { About } from '../interfaces/about.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  infopage: About = {};
  cargada = false;
  dataAbout: About = {};

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.getAbout();
  }

  private cargarInfo() {
    this.http.get('assets/data/data.json')
    .subscribe( (resp: About) => {
        this.cargada = true;
        this.infopage = resp;
    } )
  }

  private getAbout() {
    this.http.get('https://portfolio-web-bd37a-default-rtdb.firebaseio.com/about.json')
      .subscribe( (response: About) => {
        this.dataAbout = response;
        this.cargada = true;
        /* console.log('dataAbout:', this.dataAbout); */
      });
  }

}
