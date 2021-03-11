import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as UserActions from '../actions/users.actions';
import { DocumentsState } from './documents.reducer';

export interface AppState {
  users: UserState;
  documents: DocumentsState;
}

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: [],
};

const userReducer = createReducer(
  initialState,
  on(UserActions.userAdd, (state, action) => ({
    users: state.users.concat(action),
  })),
  on(UserActions.userRemove, (state, action) => ({
    users: state.users.filter((u) => u.id !== action.id),
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
