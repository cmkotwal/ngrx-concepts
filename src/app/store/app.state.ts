import { loadingReducer } from './shared/shared.reducer';
import { SHARED_STATE } from './shared/shared.selector';
import { SharedState } from './shared/shared.state';

export interface AppState {
  [SHARED_STATE]: SharedState;
}

export const appReducer = {
  [SHARED_STATE]: loadingReducer,
};
