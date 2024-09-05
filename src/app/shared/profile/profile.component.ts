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

  listNetwork = [
    { linkNetwork: 'https://github.com/NermFrontDev', socialIcon: 'fa-github'},
    { linkNetwork: 'https://www.linkedin.com/in/nerm-frontdev/', socialIcon: 'fa-linkedin-in'},
    { linkNetwork: 'https://www.instagram.com/nerm_frontend/', socialIcon: 'fa-instagram'},
    { linkNetwork: 'https://x.com/NermFrontend', socialIcon: 'fa-x-twitter'},
  ]


}
