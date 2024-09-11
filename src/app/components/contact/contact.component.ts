import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  recaptchaResponse: string | null = null;
  emailNerm: string = 'nerm.frontend@gmail.com';
  subjects: string[] = [
    'Interested in your Software Portfolio',
    'Consult about Your Work in Development',
    'Developer Portfolio Review',
    'Explore My Software Portfolio',
    'Development Portfolio: Can You Take a Look?',
    'Your Experience in Software Development',
    'Portfolio and Projects in Development',
    'Portfolio Review Request',
    'Review of Projects in Development',
    'Software Portfolio: First Contact',
  ];

  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router)
  {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      budget: [''],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  resolved(captchaResponse: string | null) {
    this.recaptchaResponse = captchaResponse;
    if (captchaResponse) {
      console.log(`Resolved captcha with response: ${captchaResponse}`);
    } else {
      console.log('Captcha response is null');
    }
  }

  sendEmail(event: Event): void {

    event.preventDefault();

    const formValues = this.contactForm.value;
    const templateParams = {
      fullName: formValues.fullName,
      to_name: 'Nerm Front-End Developer',
      email: formValues.email,
      phone: formValues.phone,
      subject: formValues.subject,
      budget: formValues.budget,
      message: formValues.message,
      'g-recaptcha-response': this.recaptchaResponse,
    };

    if (this.contactForm.valid && this.recaptchaResponse) {
      emailjs
        .send('service_odk8mgs', 'template_ojvfw6v', templateParams, 'QN2wpaibnHXbWTOUE')
        .then(
          (response) => {
            this.showSuccess();
            /* console.log('SUCCESS!'); */
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again later.',
          });
        },
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Please complete the form and reCAPTCHA.',
      });
    }
    this.onReset();
  }

  onReset(): void {
    setTimeout(() => {
      this.contactForm.reset();
      window.location.reload();
    }, 3000);
  }

  showSuccess(): void {
    const userName = this.contactForm.get('fullName')?.value;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Thanks ${userName}`,
      text: 'Your email was sent successfully!',
      showConfirmButton: false,
      timer: 2500
    });
  }

}
