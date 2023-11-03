import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {

  baseURL:string = 'http://localhost:3005/products';

  constructor(private http: HttpClient){}

  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.baseURL);
  }

  getByID(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(`${this.baseURL}/${id}`);
  }

  add(prod:IProduct){
    return this.http.post(this.baseURL,prod)
  }

  edit(id:number,prod:IProduct){
    return this.http.put(`${this.baseURL}/${id}`,prod)

  }

  delete(id:number){
    return this.http.delete(`${this.baseURL}/${id}`)
  }

}
