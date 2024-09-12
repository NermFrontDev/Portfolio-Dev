import { Component } from '@angular/core';
interface Spec {
  title: string,
  icon: string,
  description: string,
  projectCount: string
}

@Component({
  selector: 'app-specializations',
  templateUrl: './specializations.component.html',
  styleUrls: ['./specializations.component.scss']
})
export class SpecializationsComponent {
  specializations: Spec[] = [];

  ngOnInit(): void {
    this.specializations = [
      {
        title: 'Website Design Collaboration',
        icon: '/la_bezier-curve.svg',
        description: 'I created digital products with unique ideas use Figma, Adobe Xd & Sketch',
        projectCount: '24 Projects',
      },
      {
        title: 'Development',
        icon: '/code_bezier-curve.svg',
        description: 'I build website go live with Angular, Webflow or WordPress',
        projectCount: '26 Projects',
      },
      {
        title: 'SEO/Marketing',
        icon: '/seo_web.svg',
        description: 'Increase your website traffic with optimized SEO tuning',
        projectCount: '8 Projects',
      }
    ]
  }
}
