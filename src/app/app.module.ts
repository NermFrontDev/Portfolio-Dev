import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { NgModule } from '@angular/core';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { AboutComponent } from './components/about/about.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { HomeComponent } from './components/home/home.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { PageComponentsComponent } from './components/page-components/page-components.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { SpecializationsComponent } from './components/specializations/specializations.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { IntersectionObserverDirective } from './directives/intersection.directive';
import { ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AboutComponent,
    AdvantagesComponent,
    AppComponent,
    ContactComponent,
    EducationComponent,
    HomeComponent,
    IntersectionObserverDirective,
    MenuComponent,
    NumbersComponent,
    PageComponentsComponent,
    PortfolioComponent,
    ProfileComponent,
    SpecializationsComponent,
    TestimonialsComponent,
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    AppRoutingModule,
    BrowserModule,
    NgxBootstrapIconsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
