import { AppState } from '../reducers/users.reducer';

export const getUsers = (state: AppState) => state.users.users;
