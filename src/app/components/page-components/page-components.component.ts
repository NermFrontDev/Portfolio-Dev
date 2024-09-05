import { Component, EventEmitter, Output } from '@angular/core';

interface sectionNames {
  id?: number,
  sectionHome: string,
  sectionAbout: string,
  sectionResume: string,
  sectionServices: string,
  sectionSkills: string,
  sectionPortfolio: string,
  sectionTestimonial: string,
  sectionContact: string,
}

@Component({
  selector: 'app-page-components',
  templateUrl: './page-components.component.html',
  styleUrls: ['./page-components.component.scss']
})

export class PageComponentsComponent {

  @Output() sectionVisible = new EventEmitter<{ sectionId: string, isVisible: boolean }>();

  onSectionVisible(sectionId: string, isVisible: boolean): void {
    this.sectionVisible.emit({ sectionId, isVisible });
  }

  constructor() {
  }

  names: sectionNames = {
    sectionHome : 'Home',
    sectionAbout : 'About',
    sectionResume : 'Resume',
    sectionServices : 'Services',
    sectionSkills : 'Skills',
    sectionPortfolio : 'Portfolio',
    sectionTestimonial : 'Testimonial',
    sectionContact : 'Contact',
  }

}
