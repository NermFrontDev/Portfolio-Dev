import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../interfaces/skills.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  cargada = false;
  dataSkills: Skills[] = [];

  constructor( private http: HttpClient ) {
    this.getSkillsData()
  }

  private getSkillsData() {
    this.http.get<Skills[]>('https://portfolio-web-bd37a-default-rtdb.firebaseio.com/skills.json')
      .subscribe( (response: Skills[]) => {
        this.dataSkills = response;
        this.cargada = true;
        /* console.log('Skills:', response); */
      })
  }


}
