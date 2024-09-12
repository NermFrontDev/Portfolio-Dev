import { Component, OnInit } from '@angular/core';
interface Job {
  yearTitle: string;
  jobItems: { title: string; description: string }[];
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  jobs: Job[] = [];

  ngOnInit(): void {
    this.jobs = [
      {
        yearTitle: '2023 - Present',
        jobItems: [
          {
            title: 'Front-End Angular Developer',
            description: 'Freelance'
          },
          {
            title: 'Front-End Angular Developer',
            description: 'Navojoa\'s University Computer Engineer Academy'
          }
        ]
      },
      {
        yearTitle: '2018 - 2023',
        jobItems: [
          {
            title: 'Web Front-End Developer',
            description: 'Navojoa\'s University Computer Engineer Academy'
          },
          {
            title: 'Web & UI Developer',
            description: 'Navojoa\'s University Computer Engineer Academy'
          },
          {
            title: 'UX/UI Developer',
            description: 'Navojoa\'s University Computer Engineer Academy'
          }
        ]
      },
      {
        yearTitle: '2014 - 2018',
        jobItems: [
          {
            title: 'Bachelor Degree of Computer System Engineering',
            description: 'University of Navojoa, Sonora, México'
          }
        ]
      }
    ];
  }

}
