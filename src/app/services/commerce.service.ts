import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { CommerceItem } from '../models/commerce-item.model';

@Injectable({
  providedIn: 'root',
})
export class CommerceService {
  private readonly apiUrl = environment.apiUrl;
  private readonly limit = 20;
  private skip = 0;

  constructor(private http: HttpClient) {}

  getCommerces(): Observable<CommerceItem[]> {
    const url = `${this.apiUrl}?limit=${this.limit}&skip=${this.skip}`;

    this.skip += this.limit;

    return this.http.get<CommerceItem[]>(url);
  }
}
