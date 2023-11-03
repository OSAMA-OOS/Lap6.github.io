import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  baseURL:string = 'http://localhost:3005/cart';



  cart:IProduct[]=[]

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.baseURL);
  }

  addToCart(prod:IProduct){
    this.cart.push(prod)
    return this.http.post(this.baseURL,prod)
  }

  delete(id:number){
    return this.http.delete(`${this.baseURL}/${id}`)
  }
}
