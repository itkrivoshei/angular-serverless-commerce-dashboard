import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CommerceItem {
  product_name: string;
  material: string;
  department: string;
  price: number;
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

    return this.http.get<CommerceItem[]>(url);
  }
}