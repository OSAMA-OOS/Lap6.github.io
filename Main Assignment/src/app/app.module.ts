import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { NavBar2Component } from './Components/Shared/nav-bar2/nav-bar2.component';
import { HomeComponent } from './Components/Core/home/home.component';
import { ContactComponent } from './Components/Core/contact/contact.component';
import { NotFoundComponent } from './Components/Core/not-found/not-found.component';
import { ProductsComponent } from './Components/Core/products/products.component';
import { LoginComponent } from './Components/Core/login/login.component';
import { DashboardComponent } from './Components/Core/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './Components/Core/product-details/product-details.component';
import { ProductFormComponent } from './Components/Core/product-form/product-form.component';
import { CartComponent } from './Components/Core/cart/cart.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBar2Component,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    ProductsComponent,
    LoginComponent,
    DashboardComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
