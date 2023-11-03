import { IProduct } from './../../../models/iproduct';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartServiceService } from 'src/app/Services/cart/cart-service.service';
import { ProductsAPIService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
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
