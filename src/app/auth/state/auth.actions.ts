import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login Success';
export const LOGIN_FAIL = '[auth page] login Fail';
export const SIGNUP_START = '[auth page] signUp start';
export const SIGNUP_SUCCESS = '[auth page] signUp Success';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);

export const signUpStart = createAction(
  SIGNUP_START,
  props<{ email: string; password: string }>()
);

export const signUpSucess = createAction(
  SIGNUP_SUCCESS,
  props<{ user: User }>()
);
