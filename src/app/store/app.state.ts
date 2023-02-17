import { AUTH_STATE_NAME } from '../auth/state/auth.selector';
import { AuthState } from '../auth/state/auth.state';
import { loadingReducer } from './shared/shared.reducer';
import { SHARED_STATE } from './shared/shared.selector';
import { SharedState } from './shared/shared.state';
import { AuthReducer } from '../auth/state/auth.reducer';

export interface AppState {
  [AUTH_STATE_NAME]: AuthState;
  [SHARED_STATE]: SharedState;
}

export const appReducer = {
  [SHARED_STATE]: loadingReducer,
  [AUTH_STATE_NAME]: AuthReducer,
};
