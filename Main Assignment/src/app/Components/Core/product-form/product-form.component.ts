import { ProductsAPIService } from 'src/app/Services/products-api.service';
import { IProduct } from './../../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  prodID: number = 0;

  product: IProduct = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };

  constructor(
    private productService: ProductsAPIService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prodID = this.activatedRoute.snapshot.params['id'];

    if (this.prodID != 0) {
      this.productService.getByID(this.prodID).subscribe({
        next: (data) => {
          this.product = data;
        },
      });
    }
  }

  GetData(e: Event) {
    e.preventDefault();

    if (this.prodID) {
      this.productService.edit(this.prodID, this.product).subscribe();
    } else {
      this.productService.add(this.product).subscribe();
    }

    this.router.navigate(['/products']);
  }
}
