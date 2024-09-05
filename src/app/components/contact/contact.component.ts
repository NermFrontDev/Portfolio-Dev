import { Component } from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor( private formBuilder: FormBuilder ) {}

  contactForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: [''],
    subject: ['', Validators.required],
    budget: [''],
    message: ['', Validators.required],
  });

  onSubmit(){
    this.showAlert();
    this.contactForm.reset();
  }

  showAlert() {
    let fullNameForm = this.contactForm.get('fullName')?.value;
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Thanks ${fullNameForm}`,
      text: 'Your email was sent',
      showConfirmButton: false,
      timer: 2500
    });
  }


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
