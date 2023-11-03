import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/Services/cart/cart-service.service';
import { ProductsAPIService } from 'src/app/Services/products-api.service';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products: IProduct[] = [];
  cart: IProduct[] = [];

  constructor(
    private productService: ProductsAPIService,
    private router: Router,
    private cartService: CartServiceService
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log('Error :' + err);
      },
      complete: () => {},
    });
  }

  delete(id: number) {
    var result = confirm('Are You Sure Want To Delete ?');

    if (result) {
      this.productService.delete(id).subscribe();
      this.products.splice(id - 1, 1);
      this.router.navigate(['/products']);
    }
  }

  addToCart(prod: IProduct) {
    this.cartService.addToCart(prod).subscribe();
    this.cart.push(prod);
    console.log(this.cart);
    this.router.navigate(['/products']);
  }
}

