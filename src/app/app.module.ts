import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Tab3Page } from './tab3/tab3.page';
import { ButtonComponent } from './components/button/button.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';   
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
import { BrandsComponent } from './brands/brands.component';
import { OperstionsComponent } from './operstions/operstions.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { EditbannerComponent } from './editbanner/editbanner.component';
import { LandingheaderComponent } from './landingheader/landingheader.component';
import { FinalbannerComponent } from './finalbanner/finalbanner.component';
import { AddfinalbannerComponent } from './addfinalbanner/addfinalbanner.component';

@NgModule({
  declarations: [AppComponent,AdminprofileComponent,OperstionsComponent,AddemployeeComponent,AddfinalbannerComponent,AdmindashboardComponent,BannerComponent,ButtonComponent,LandingheaderComponent,EditbannerComponent,FinalbannerComponent,
    AddbannerComponent,LandingComponent,SocialmediaComponent,FooterComponent,SignupComponent,BrandsComponent,HeaderComponent,HomeComponent,ItemsComponent,Banner2Component,NavbarComponent,Banner1Component],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
