import { Component } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor( public _homeService: AboutService ) {

  }

}
