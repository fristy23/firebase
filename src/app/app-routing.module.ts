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
import { ButtonComponent } from './components/button/button.component';


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
  },
  {
    path:'button',  
    component:ButtonComponent

  
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./adminPages/employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./adminPages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'vendors',
    loadChildren: () => import('./adminPages/vendors/vendors.module').then( m => m.VendorsPageModule)
  },
  {
    path: 'banners',
    loadChildren: () => import('./adminPages/banners/banners.module').then( m => m.BannersPageModule)
  },
 



  
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
