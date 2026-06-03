import { createReducer, on } from '@ngrx/store';

import { CommerceItem } from '../../models/commerce-item.model';
import * as CommerceActions from '../actions/commerce.actions';

export const commerceFeatureKey = 'commerce';

export interface State {
  commerces: CommerceItem[];
  isLoading: boolean;
  error: string | null;
}

export const initialState: State = {
  commerces: [],
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(CommerceActions.loadCommerces, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CommerceActions.loadCommercesSuccess, (state, action) => ({
    ...state,
    commerces: [...state.commerces, ...action.commerces],
    isLoading: false,
  })),
  on(CommerceActions.loadCommercesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
);
