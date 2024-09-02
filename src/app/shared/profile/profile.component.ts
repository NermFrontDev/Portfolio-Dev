import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  date: Date = new Date();
  year: number = this.date.getFullYear();

  role: string = 'Front-End & UI Developer'
  email: string = 'nerm.frontend@gmail.com';
  location: string = 'Tucson, Arizona'


}
