import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CommerceItem {
  product_name: string;
  material: string;
  department: string;
  price: number;
}

interface DummyJsonProduct {
  title: string;
  brand?: string;
  category: string;
  price: number;
}

interface DummyJsonProductsResponse {
  products: DummyJsonProduct[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root',
})
export class CommerceService {
  private apiUrl = environment.apiUrl;
  private limit = 20;
  private skip = 0;

  constructor(private http: HttpClient) {}

  getCommerces(): Observable<CommerceItem[]> {
    const url = `${this.apiUrl}?limit=${this.limit}&skip=${this.skip}`;

    this.skip += this.limit;

    return this.http.get<DummyJsonProductsResponse>(url).pipe(
      map((response) =>
        response.products.map((product) => ({
          product_name: product.title,
          material: product.brand || 'N/A',
          department: product.category,
          price: product.price,
        }))
      )
    );
  }
}