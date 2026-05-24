import { createAction, props } from '@ngrx/store';

import { CommerceItem } from '../../models/commerce-item.model';

export const loadCommerces = createAction('[Commerce] Load Commerces');

export const loadCommercesSuccess = createAction(
  '[Commerce] Load Commerces Success',
  props<{ commerces: CommerceItem[] }>()
);

export const loadCommercesFailure = createAction(
  '[Commerce] Load Commerces Failure',
  props<{ error: string }>()
);
