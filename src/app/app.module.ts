import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Tab3Page } from './tab3/tab3.page';
import { ButtonComponent } from './components/button/button.component';  
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AddemployeeComponent } from './adminPages/addemployee/addemployee.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './adminPages/banner/banner.component';
import { AddbannerComponent } from './addbanner/addbanner.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Banner1Component } from './banner1/banner1.component';
import { Banner2Component } from './banner2/banner2.component';
import { ItemsComponent } from './items/items.component';
import { FinalemployeeComponent } from './finalemployee/finalemployee.component';
import { BrandsComponent } from './brands/brands.component';
import { OperstionsComponent } from './operstions/operstions.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditbannerComponent } from './editbanner/editbanner.component';
import { LandingheaderComponent } from './landingheader/landingheader.component';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { FinalbannerComponent } from './finalbanner/finalbanner.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { VendorComponent } from './vendor/vendor.component';
import { FinaltransactionComponent } from './finaltransaction/finaltransaction.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { FinalorderComponent } from './finalorder/finalorder.component';
import { FinalvendorComponent } from './finalvendor/finalvendor.component';
import { FinaluserComponent } from './finaluser/finaluser.component';
import { AddfinalbannerComponent } from './addfinalbanner/addfinalbanner.component';
import { AddcategorystoreComponent } from './addcategorystore/addcategorystore.component';
@NgModule({
  declarations: [AppComponent,FinaluserComponent,FinalorderComponent,FinaltransactionComponent,FinalvendorComponent,UserComponent,FinalemployeeComponent,EmployeeComponent,AddcategorystoreComponent,OrderComponent,VendorComponent,AddfinalbannerComponent,FinalbannerComponent,AdmindashboardComponent,AdminprofileComponent,AddbannerComponent,BannerComponent,AddemployeeComponent,TransactionlistComponent,OperstionsComponent,EditbannerComponent
    ,ButtonComponent,LandingheaderComponent,LandingComponent,SocialmediaComponent,FooterComponent,SignupComponent,BrandsComponent,HeaderComponent,HomeComponent,ItemsComponent,Banner2Component,NavbarComponent,Banner1Component],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
