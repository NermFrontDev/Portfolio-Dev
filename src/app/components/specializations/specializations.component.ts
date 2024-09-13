import { Component } from '@angular/core';
import { SpecializationsService } from 'src/app/services/specializations.service';

@Component({
  selector: 'app-specializations',
  templateUrl: './specializations.component.html',
  styleUrls: ['./specializations.component.scss']
})
export class SpecializationsComponent {

  constructor( public _specsService: SpecializationsService) {
  }
}
