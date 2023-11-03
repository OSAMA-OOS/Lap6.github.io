import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart/cart-service.service';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-nav-bar2',
  templateUrl: './nav-bar2.component.html',
  styleUrls: ['./nav-bar2.component.css']
})
export class NavBar2Component implements OnInit , OnChanges{

  cart:IProduct[]=[]

  constructor(private cartService:CartServiceService){}
  ngOnChanges(changes: SimpleChanges): void {
    this.cartService.getAll().subscribe({
      next:(data) => {this.cart=data}
    });
  }

  ngOnInit(): void {
    this.cartService.getAll().subscribe({
      next:(data) => {this.cart=data}
    });
  }









}
