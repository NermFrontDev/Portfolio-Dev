import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from "@vercel/analytics"
import { AboutService } from './services/about.service';

injectSpeedInsights();
inject();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Front-Developer | Nerm';

  constructor( public aboutService: AboutService ){

  }

  activeSection: string = '';

  onSectionVisible(sectionId: string, isVisible: boolean): void {
    if (isVisible) {
      this.activeSection = sectionId;
    }
  }

  ngOnInit(): void {
    Aos.init({
      easing: 'ease',
      duration: 700,
      once: false,
    });
  }

}
