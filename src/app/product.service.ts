import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:9091/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) { }

  addProduct(product: any): Observable<any> {
    return this.http.post(`${BASE_URL}products`, product);
  }

  getAllProduct(): Observable<any> {
    return this.http.get(`${BASE_URL}products`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}products/${id}`);
  }

  getProductById(id: number) {
    return this.http.get(`${BASE_URL}products/${id}`);
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`${BASE_URL}products/${id}`, product);
  }
}
