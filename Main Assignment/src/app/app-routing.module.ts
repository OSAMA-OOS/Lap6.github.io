import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Core/home/home.component';
import { ProductsComponent } from './Components/Core/products/products.component';
import { ContactComponent } from './Components/Core/contact/contact.component';
import { NotFoundComponent } from './Components/Core/not-found/not-found.component';
import { LoginComponent } from './Components/Core/login/login.component';
import { DashboardComponent } from './Components/Core/dashboard/dashboard.component';
import { ProductDetailsComponent } from './Components/Core/product-details/product-details.component';
import { ProductFormComponent } from './Components/Core/product-form/product-form.component';
import { CartComponent } from './Components/Core/cart/cart.component';
import { autenticationGuard } from './guards/autentication.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [autenticationGuard],
  },
  { path: 'products/details/:id', component: ProductDetailsComponent },
  {
    path: 'products/edit/:id',
    component: ProductFormComponent,
    canActivate: [autenticationGuard],
  },
  {
    path: 'products/new',
    component: ProductFormComponent,
    canActivate: [autenticationGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
