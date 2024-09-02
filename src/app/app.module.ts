import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SpecializationsComponent } from './components/specializations/specializations.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageComponentsComponent } from './components/page-components/page-components.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MenuComponent,
    HomeComponent,
    NumbersComponent,
    AboutComponent,
    EducationComponent,
    SpecializationsComponent,
    AdvantagesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ContactComponent,
    PageComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
