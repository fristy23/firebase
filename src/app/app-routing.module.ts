import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { Tab3Page } from './tab3/tab3.page';
import { Tab1Page } from './tab1/tab1.page';
import { UserdetailsPage } from './userdetails/userdetails.page';
import { UpdatePage } from './update/update.page';
import { LogoutPage } from './logout/logout.page';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path:'userdetails',
    loadChildren:() =>import('./userdetails/userdetails.module').then(m=>m.UserdetailsPageModule),
  },
  {
    path:'tab1',
    component:Tab1Page,
  },
  {
     path:'',
    component:LandingComponent,
  },
  {
    path:'tab3',
    component:Tab3Page,

  },
  {
    path:'userdetails',
    component:UserdetailsPage,

  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'landing',
    component:LandingComponent,
  }
 
  
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
