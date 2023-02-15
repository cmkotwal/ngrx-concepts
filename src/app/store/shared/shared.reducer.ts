import { createReducer, on } from '@ngrx/store';
import { setLoadingSpinner } from './shared.actions';
import { initialState } from './shared.state';

export const _loadingReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      state,
      showLoading: action.status,
    };
  })
);

export function loadingReducer(state, action) {
  return _loadingReducer(state, action);
}
