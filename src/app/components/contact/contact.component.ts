import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  emailNerm: string = 'nerm.frontend@gmail.com';

  subjects:string[] = [
      'Interesado en tu Portafolio de Software',
      'Consulta sobre Tu Trabajo en Desarrollo',
      'Revisión de Portafolio de Desarrollador',
      'Explora Mi Portafolio de Software',
      'Portafolio de Desarrollo: ¿Puedes Echarle un Vistazo?',
      'Tu Experiencia en Desarrollo de Software',
      'Portafolio y Proyectos en Desarrollo',
      'Solicitud de Revisión de Portafolio',
      'Revisión de Proyectos en Desarrollo',
      'Portafolio de Software: Primer Contacto',
  ];

}
