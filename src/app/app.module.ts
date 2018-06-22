import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'ngx-owl-carousel';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home';
import { ServicesComponent } from './pages/services/services';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    HeaderComponent,
    AboutusComponent,
    ContactComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
