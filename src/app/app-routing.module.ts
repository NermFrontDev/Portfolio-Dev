import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './shared/profile/profile.component';

const routes: Routes = [
  /* { path: '', redirectTo: '/componente-uno', pathMatch: 'full' }, */
  { path: 'componente-uno', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
