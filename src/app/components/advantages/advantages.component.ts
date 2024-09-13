import { Component } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {

  constructor( public _skillsService: SkillsService ) {

  }

}
