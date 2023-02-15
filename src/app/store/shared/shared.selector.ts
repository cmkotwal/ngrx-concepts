import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './shared.state';

export const SHARED_STATE = 'shared';

const getShareDState = createFeatureSelector<SharedState>(SHARED_STATE);

export const getLoading = createSelector(getShareDState, (state) => {
  return state.showLoading;
});
