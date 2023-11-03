import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsAPIService } from 'src/app/Services/products-api.service';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  prodID:number=0;
  product:IProduct|undefined;

  constructor(private avtivatedRoute:ActivatedRoute, private productService:ProductsAPIService){}

  ngOnInit(): void {
    this.prodID = this.avtivatedRoute.snapshot.params['id'];
    this.productService.getByID(this.prodID).subscribe({
      next:(data) => {this.product= data},
      error:(err) => {console.log('Error :'+ err)},
      complete:()=>{}
    })


  }
}
