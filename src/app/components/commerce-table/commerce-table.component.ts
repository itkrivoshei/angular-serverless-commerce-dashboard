import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CommerceItem } from '../../models/commerce-item.model';
import { loadCommerces } from '../../store/actions/commerce.actions';
import { State } from '../../store/reducers/commerce.reducer';

@Component({
  selector: 'app-commerce-table',
  templateUrl: './commerce-table.component.html',
  styleUrls: ['./commerce-table.component.scss'],
})
export class CommerceTableComponent implements OnInit {
  readonly commerces$: Observable<CommerceItem[]>;
  readonly isLoading$: Observable<boolean>;
  readonly error$: Observable<string | null>;
  readonly displayedColumns = [
    'index',
    'product_name',
    'material',
    'department',
    'price',
  ];

  constructor(private store: Store<{ commerce: State }>) {
    this.commerces$ = this.store.select((state) => state.commerce.commerces);
    this.isLoading$ = this.store.select((state) => state.commerce.isLoading);
    this.error$ = this.store.select((state) => state.commerce.error);
  }

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(): void {
    this.store.dispatch(loadCommerces());
  }
}
