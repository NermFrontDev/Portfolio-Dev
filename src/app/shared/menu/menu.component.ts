import { Component, Input, OnInit } from '@angular/core';
import { NetworksService } from 'src/app/services/networks.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor( public _networkService: NetworksService ) {

  }

  @Input() activeSection: string = '';

  menuItems = [
    {route: 'home', icon: 'bi-house'},
    {route: 'about', icon: 'bi-person'},
    {route: 'resume', icon: 'bi-journal-code'},
    {route: 'services', icon: 'bi-box'},
    {route: 'skills', icon: 'bi-gem'},
    {route: 'portfolio', icon: 'bi-briefcase'},
    {route: 'contact', icon: 'bi-envelope'},
  ];

  socialIcons = [
    {link: 'https://github.com/NermFrontDev', icon: 'fa-github'},
    {link: 'https://www.linkedin.com/in/nerm-frontdev/', icon: 'fa-linkedin-in'},
    {link: 'https://www.instagram.com/nerm_frontend/', icon: 'fa-instagram'},
    {link: 'https://x.com/NermFrontend', icon: 'fa-twitter'},
  ]

}
