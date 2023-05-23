import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<<< HEAD:src/app/adminPages/account/account-routing.module.ts

import { AccountPage } from './account.page';
========
import { UserPage } from '../adminPages/user/user.page'; 
import { DashboardPage } from './dashboard.page';
>>>>>>>> 043d5d80b242b7b68cacf3c734d1926025aab130:src/app/dashboard/dashboard-routing.module.ts

const routes: Routes = [
  {
    path: '',
<<<<<<<< HEAD:src/app/adminPages/account/account-routing.module.ts
    component: AccountPage
========
    component: DashboardPage
  },
  {
    path:'',
    component:UserPage
>>>>>>>> 043d5d80b242b7b68cacf3c734d1926025aab130:src/app/dashboard/dashboard-routing.module.ts
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
