import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  cargada = false;
  dataProfile: Profile = {};

  constructor( private http: HttpClient) {
    this.getProfileData();
  }

  private getProfileData() {
    this.http.get('https://portfolio-web-bd37a-default-rtdb.firebaseio.com/profile.json')
      .subscribe( (response: Profile) => {
        this.cargada = true;
        this.dataProfile = response;
      })
  }
}
