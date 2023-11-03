import { IProduct } from './../../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/Services/cart/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: IProduct[] = [];

  constructor(
    private cartService: CartServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getAll().subscribe({
      next: (data) => {
        this.cart = data;
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
      var deleted = this.cart.find((p) => (p.id == id));
      if (deleted) {
        var index = this.cart.indexOf(deleted);
        this.cartService.delete(id).subscribe();
        this.cart.splice(index, 1);
      }
    }
  }
}
