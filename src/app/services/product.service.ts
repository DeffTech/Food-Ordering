import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`);
  }

  getProductById(id: any): Observable<Product> {
    return this.http.get<Product>(`${environment.baseUrl}/products/${id}/?_expand=category`);
  }

  getWeekTopProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products?weekTop=true`);
  }

  getMonthTopProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products?monthTop=true`);
  }

  getProductsByCategory(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products?category.name=${name}`);
  }

  searchProducts(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products?q=${keyword}&_expand=category`);
  }
}
