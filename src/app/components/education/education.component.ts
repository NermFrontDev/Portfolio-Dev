import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  constructor( public _educationService: EducationService ) {
  }

}
