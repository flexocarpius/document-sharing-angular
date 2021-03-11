import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const USER_ADD = 'USER_ADD';
export const USER_REMOVE = 'USER_REMOVE';

export const userAdd = createAction(USER_ADD, props<User>());
export const userRemove = createAction(USER_REMOVE, props<User>());
