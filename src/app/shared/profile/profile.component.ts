import { Component } from '@angular/core';
import { NetworksService } from 'src/app/services/networks.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor( public _networkService: NetworksService) {
  }

  date: Date = new Date();
  year: number = this.date.getFullYear();

  role: string = 'Front-End & UI Developer';
  email: string = 'nerm.frontend@gmail.com';
  location: string = 'Tucson, Arizona';

}
