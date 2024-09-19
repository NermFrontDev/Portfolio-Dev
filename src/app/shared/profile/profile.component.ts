import { Component } from '@angular/core';
import { NetworksService } from 'src/app/services/networks.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(
    public _networkService: NetworksService,
    public _profileService: ProfileService
  ) { }

  date: Date = new Date();
  year: number = this.date.getFullYear();

}
