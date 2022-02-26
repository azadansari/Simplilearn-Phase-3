import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/productDetails");
  }


}
