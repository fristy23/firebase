import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { SignupComponent } from '../signup/signup.component';
import { LogoutPage } from '../logout/logout.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path:'signup',
    component:SignupComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
